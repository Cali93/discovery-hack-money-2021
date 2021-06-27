import * as dotenv from 'dotenv';
import pgFormat from 'pg-format';
import { Category, PrismaClient, Project } from '@prisma/client';
import { HttpService } from '@nestjs/common';
import { getEverestCategoriesQuery } from '../src/graphql/everest/everest-categories';
import { getEverestProjectsQuery } from '../src/graphql/everest/everest-project';

type ProjectsWithCategoryIds = Project & { categories: string[] }[];
const prisma = new PrismaClient();
const http = new HttpService();

async function main() {
  dotenv.config();
  console.log('Seeding...');
  const { data: everestCategoriesResponse } = await http.post(process.env.EVEREST_SUBGRAPH_API_URL, {
    query: getEverestCategoriesQuery
  }).toPromise();
  const allEverestCategories = everestCategoriesResponse.data.categories.map(({ subcategories, parentCategory, ...category }: any) => {
    if (subcategories && subcategories.length > 0) {
      const formattedSubCategories = subcategories.map(({ parentCategory, ...sub }) => ({ ...sub, parentCategoryId: parentCategory?.id }))
      return [{ ...category, parentCategoryId: parentCategory?.id }, ...formattedSubCategories]
    }
    return [{ ...category, parentCategoryId: parentCategory?.id }];
  }).flat();

  const createdCategories = await prisma.category.createMany({
    skipDuplicates: true,
    data: allEverestCategories
  });

  console.log({ createdCategories });
  const getAllEverestProjects = async (first = 100, skip = 0, alreadyFoundProjects = []) => {
    return http.post(process.env.EVEREST_SUBGRAPH_API_URL, {
      query: getEverestProjectsQuery,
      variables: {
        first,
        skip
      }
    }).toPromise().then(({ data: { data }}) => {
      console.log(data)
      if(data.projects.length === 100){
        console.log({ first, skip })
        return getAllEverestProjects(first, skip + 100, [...alreadyFoundProjects, ...data.projects])
      }
      return [...alreadyFoundProjects, ...data.projects];
    });
  }
  const allProjects = await getAllEverestProjects();
  console.log({ allProjects: allProjects.length })

  const allEverestProjects = (withCategories = true): Project[] | ProjectsWithCategoryIds => allProjects.map(({ categories, ...project }) => {
    if (categories && categories.length > 0) {
      return withCategories
        ? {
            ...project,
            categories: categories.map(cat => {
              if (cat.id && cat.subcategories && cat.subcategories.length > 0) {
              return [cat.id, ...cat.subcategories.map(sub => sub.id)]
              }
              return [cat?.id]
            }).flat()
          }
        : project
    }
    return null
  }).filter(project => {
    console.log(project);
    return project?.id;
  })
  console.log(allEverestProjects)

  const createdProjects = await prisma.project.createMany({
    data: allEverestProjects(false),
    skipDuplicates: true
  })

  console.log(createdProjects)

  // TODO: use reduce here to deduplicate
  const projectCategoryRel = allEverestProjects().map(
    (project) => {
      return project.categories.map(categoryId => ({ projectId: project.id, categoryId })).filter(({ categoryId }, index) => !project.categories.includes(categoryId, index+1))
    }
  ).flat()

  console.log({projectCategoryRel})

  const linkProjectsToCategories = await prisma.projectCategories.createMany({
    data: projectCategoryRel,
    skipDuplicates: true
  })
  console.log(linkProjectsToCategories)

  // const user1 = await prisma.user.create({
  //   data: {
  //     email: 'lisa@simpson.com',
  //     firstname: 'Lisa',
  //     lastname: 'Simpson',
  //     password: '$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm', // secret42
  //     role: 'USER',
  //     posts: {
  //       create: {
  //         title: 'Join us for Prisma Day 2019 in Berlin',
  //         content: 'https://www.prisma.io/day/',
  //         published: true,
  //       },
  //     },
  //   },
  // });
  // const user2 = await prisma.user.create({
  //   data: {
  //     email: 'bart@simpson.com',
  //     firstname: 'Bart',
  //     lastname: 'Simpson',
  //     role: 'ADMIN',
  //     password: '$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm', // secret42
  //     posts: {
  //       create: [
  //         {
  //           title: 'Subscribe to GraphQL Weekly for community news',
  //           content: 'https://graphqlweekly.com/',
  //           published: true,
  //         },
  //         {
  //           title: 'Follow Prisma on Twitter',
  //           content: 'https://twitter.com/prisma',
  //           published: false,
  //         },
  //       ],
  //     },
  //   },
  // });

  // console.log({ user1, user2 });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
