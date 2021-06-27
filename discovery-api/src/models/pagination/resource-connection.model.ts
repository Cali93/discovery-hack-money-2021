import { ObjectType } from '@nestjs/graphql';
import PaginatedResponse from '../../common/pagination/pagination';
import { Resource } from '../resource.model';

@ObjectType()
export class ResourceConnection extends PaginatedResponse(Resource) {}
