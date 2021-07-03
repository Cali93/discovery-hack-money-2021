import { gql } from '@apollo/client';

export const setAccountsMutation = gql`
  mutation login($data: SignupInput!){
    login(data: $data){
      accessToken
      refreshToken
    }
  }
`
export const removeAccountsMutation = gql`
  mutation logout($data: LogoutInput!){
    logout(data: $data)
  }
`