import { Injectable, BadRequestException, HttpService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EverestConfig } from '../configs/config.interface';
import { getEverestCategoriesQuery } from '../graphql/everest/everest-categories';
import { getEverestProjectsQuery } from '../graphql/everest/everest-project';
import { Project } from '../models/project.model';

@Injectable()
export class EverestService {
  constructor(
    private http: HttpService,
    private config: ConfigService
  ) {}

  async getCategories() {
    try {
      const { apiUrl } = this.config.get<EverestConfig>('everest');
      const { data } = await this.http.post(apiUrl, {
          query: getEverestCategoriesQuery
      }).toPromise();
      return data.data.categories;
    } catch (error) {
      console.log(error);
      throw error;
    }

  }

  async getDeFiProjects() {
    try {
      const { apiUrl } = this.config.get<EverestConfig>('everest');
      const { data } = await this.http.post(apiUrl, {
          query: getEverestProjectsQuery
      }).toPromise();
      return data.data.projects.filter((project: Project) => project.categories.length > 0);
    } catch (error) {
      console.log(error);
      throw error;
    }

  }
}
