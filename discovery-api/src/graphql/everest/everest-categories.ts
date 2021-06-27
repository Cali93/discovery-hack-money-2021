export const getEverestCategoriesQuery = `
{
  categories {
    id
    name
    description
    parentCategory {
      id
    }
    subcategories {
      id
      name
      description
    }
  }
}
`