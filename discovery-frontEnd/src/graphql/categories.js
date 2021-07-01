import gql from "graphql-tag";

export const getCategories = gql`query {
  getCategories {
    id
    name
    description
    projects {
      id
    }
    subcategories {
      id
      name
      description
      projects {
        id
      }
      subcategories {
        id
        name
        description
        projects {
          id
        }
      }
    }
  }
}`;
