import { Injectable, HttpService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { BrandFetchConfig,  } from '../configs/config.interface';

@Injectable()
export class BrandfetchService {
  constructor(
    private http: HttpService,
    private config: ConfigService
  ) {}

  async getProjectLogo(website: string) {
    try {
      const { apiUrl, apiKey } = this.config.get<BrandFetchConfig>('brandfetch');
      const { data } = await this.http.post(apiUrl, {
        domain: website
      }, {
        headers: {
          'x-api-key': apiKey
        }
      }).toPromise();
      console.log({data})
      return data.response.logo?.image || data.response.icon?.image;
    } catch (error) {
      console.log(error);
      throw error;
    }

  }
}
