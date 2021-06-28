import { Injectable, BadRequestException, HttpService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TMP_HACK_PROJECT_NAMES } from '../common/constants';
import { UniswapConfig } from '../configs/config.interface';
import { getUniswapTokensQuery } from '../graphql/uniswap/uniswap-tokens';
import { Project } from '../models/project.model';

@Injectable()
export class UniswapV2Service {
  constructor(
    private http: HttpService,
    private config: ConfigService
  ) {}

  async getUniswapTokensByName(tokenNames: string[]) {
    try {
      const { apiUrl } = this.config.get<UniswapConfig>('uniswap');
      const { data } = await this.http.post(apiUrl.v2, {
        // TODO: pagination here & fix hack with mapping or even better -> add tokenId field on project and symbol and contract address
          query: getUniswapTokensQuery(tokenNames.filter(name => TMP_HACK_PROJECT_NAMES.includes(name))),
          variables: null
      }).toPromise();
      return data.data.tokens;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
