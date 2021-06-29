import { Injectable, BadRequestException, HttpService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PROJECTS_TO_LINK_WITH_UNI_TOKEN_ID } from '../common/constants';
import { UniswapConfig } from '../configs/config.interface';
import { getUniswapTokensQuery } from '../graphql/uniswap/uniswap-tokens';
import { getUniswapTokensUSDTPairQuery } from '../graphql/uniswap/uniswpa-pairs';

@Injectable()
export class UniswapV2Service {
  constructor(
    private http: HttpService,
    private config: ConfigService
  ) {}

  async getUniswapTokensByIds(tokenIds: string[]) {
    try {
      const { apiUrl } = this.config.get<UniswapConfig>('uniswap');
      const { data } = await this.http.post(apiUrl.v2, {
          query: getUniswapTokensQuery,
          variables: {
            tokenIds
          }
      }).toPromise();
      console.log(data)
      return data.data.tokens;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async getUniswapTokensUSDTPairs(tokenIds: string[]) {
    try {
      const { apiUrl } = this.config.get<UniswapConfig>('uniswap');
      const { data } = await this.http.post(apiUrl.v2, {
          query: getUniswapTokensUSDTPairQuery,
          variables: {
            tokenIds,
            usdtTokenId: PROJECTS_TO_LINK_WITH_UNI_TOKEN_ID.get('Tether')
          }
      }).toPromise();
      return data.data.pairs;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
