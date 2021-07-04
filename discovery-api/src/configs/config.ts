import { Config } from './config.interface';

const config: Config = {
  nest: {
    port: 3000,
  },
  everest:{
    apiUrl: process.env.EVEREST_SUBGRAPH_API_URL
  },
  brandfetch:{
    apiUrl: process.env.BRAND_FETCH_API_URL,
    apiKey: process.env.BRAND_FETCH_API_KEY
  },
  uniswap:{
    apiUrl: {
      v2: process.env.UNISWAP_V2_SUBGRAPH_API_URL
    }
  },
  cors: {
    enabled: true,
  },
  swagger: {
    enabled: true,
    title: 'discovery-rest-api',
    description: 'REST endpoints of the Discovery API',
    version: '1.5',
    path: 'api',
  },
  graphql: {
    playgroundEnabled: true,
    debug: true,
    schemaDestination: './src/schema.graphql',
    sortSchema: true,
  },
  security: {
    expiresIn: '2m',
    refreshIn: '7d',
    bcryptSaltOrRound: 10,
  },
};

export default (): Config => config;
