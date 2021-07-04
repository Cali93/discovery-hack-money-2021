import gql from "graphql-tag";

export const getProjectById = gql`
  query getProjectById($id: String!) {
    getProjectById(id: $id) {
      id
      name
      description
      logo
      token {
        id
        name
        priceUSDT
        tradeVolume
        symbol
      }
    }
  }
`;
