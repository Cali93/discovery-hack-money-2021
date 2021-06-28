export const getUniswapTokensQuery = (tokenNames: string[]) => `{
  tokens(where:{name_in:${JSON.stringify(tokenNames)}}){
    id
    name
    symbol
    tradeVolume
  }
}
`
