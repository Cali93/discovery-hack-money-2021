export const getUniswapTokensQuery = `
query getTokens($tokenIds:[String!]){
  tokens(where:{name_in: $tokenIds}){
    id
    name
    symbol
    tradeVolume
  }
}
`
