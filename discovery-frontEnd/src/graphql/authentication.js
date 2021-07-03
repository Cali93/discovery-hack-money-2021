import { gql } from '@apollo/client';

export const setAccountsMutation = gql`
  mutation signup($data: SignupInput!){
    login(data: $data){
      accessToken
      refreshToken
    }
  }
`