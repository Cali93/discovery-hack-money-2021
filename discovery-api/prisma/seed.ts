import * as dotenv from 'dotenv';
import pgFormat from 'pg-format';
import { Category, PrismaClient, Project } from '@prisma/client';
import { HttpService } from '@nestjs/common';
import { getEverestCategoriesQuery } from '../src/graphql/everest/everest-categories';
import { getEverestProjectsQuery } from '../src/graphql/everest/everest-project';
import { PROJECTS_TO_LINK_WITH_UNI_TOKEN_ID } from '../src/common/constants';

type ProjectWithCategoryIds = Project & { categories: string[] };
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

  const getAllEverestProjects = async (first = 100, skip = 0, alreadyFoundProjects = []) => {
    return http.post(process.env.EVEREST_SUBGRAPH_API_URL, {
      query: getEverestProjectsQuery,
      variables: {
        first,
        skip
      }
    }).toPromise().then(({ data: { data } }) => {
      console.log(data)
      if (data.projects.length === 100) {
        console.log({ first, skip })
        return getAllEverestProjects(first, skip + 100, [...alreadyFoundProjects, ...data.projects])
      }
      return [...alreadyFoundProjects, ...data.projects];
    });
  }
  const allProjects = await getAllEverestProjects();
  console.log({ allProjects: allProjects.length })

  const allEverestProjects = (withCategories = true): Project[] | ProjectWithCategoryIds[] => allProjects.map(({ categories, ...project }) => {
    for (let [tokenName, uniTokenId] of PROJECTS_TO_LINK_WITH_UNI_TOKEN_ID) {
      if (project.name.toLowerCase().trim() === tokenName.toLowerCase().trim()){
        project.tokenId = uniTokenId;
        project.isFeatured = true;
      }
    }
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
  }).filter(project => project?.id)

  const createdProjects = await prisma.project.createMany({
    data: allEverestProjects(false),
    skipDuplicates: true
  })

  const projectCategoryRelations = allEverestProjects().map(
    (project: ProjectWithCategoryIds) =>
      project.categories.reduce((currentProjectCategoryRels, catId) => {
        if (currentProjectCategoryRels.some(rel => rel.categoryId === catId)) {
          return currentProjectCategoryRels
        }
        return [...currentProjectCategoryRels, { projectId: project.id, categoryId: catId }]
      }, [])
  ).flat()

  const linkProjectsToCategories = await prisma.projectCategories.createMany({
    data: projectCategoryRelations,
    skipDuplicates: true
  })
  console.log(linkProjectsToCategories)

  // TODO: format Matic to Polygon
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
