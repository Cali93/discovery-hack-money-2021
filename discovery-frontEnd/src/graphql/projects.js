import gql from "graphql-tag";

export const getProjectById = gql`
  query getProjectById($id: String!) {
    getProjectById(id: $id) {
      id
      name
      logo
      lessons {
        id
        name
        type
        challenges { id title content}
        quests { id title content}
        resources { id title content}
        sections { id title content}
      }
      description
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
