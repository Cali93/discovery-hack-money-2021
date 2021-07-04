import gql from "graphql-tag";

export const getCategories = gql`query {
  getCategories {
    id
    name
    description
    projects {
      id
      name
      isFeatured
      description
    }
    subcategories {
      id
      name
      description

    }
  }
}`;
