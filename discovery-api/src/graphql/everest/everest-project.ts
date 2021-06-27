export const getEverestProjectsQuery = `
query getProjects($first: Int, $skip: Int){
  projects(first: $first, skip: $skip) {
    id
    name
    description
    website
    twitter
    github
    categories{
      id
      name
      description
      subcategories {
        id
        name
        description
      }
    }
  }
}`
