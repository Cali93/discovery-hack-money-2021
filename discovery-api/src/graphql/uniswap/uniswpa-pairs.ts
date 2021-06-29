export const getUniswapTokensUSDTPairQuery  = `
  query getPairs($tokenIds: [String!], $usdtTokenId: String){
    pairs (where: {token0_in: $tokenIds, token1: $usdtTokenId}){
      id
      token0 {
        id
        symbol
        name
        tradeVolume
      }
      token0Price
      token1Price
    }
  }
`
