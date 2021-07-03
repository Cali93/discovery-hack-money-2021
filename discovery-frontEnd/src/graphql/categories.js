import gql from "graphql-tag";

export const getCategories = gql`query {
  getCategories {
    id
    name
    description
    projects {
      id
      name
      description
    }
    subcategories {
      id
      name
      description

    }
  }
}`;
