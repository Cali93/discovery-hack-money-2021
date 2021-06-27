import { InputType, registerEnumType } from '@nestjs/graphql';
import { Order } from '../../common/order/order';

export enum ResourceOrderField {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  published = 'published',
  title = 'title',
  content = 'content',
}

registerEnumType(ResourceOrderField, {
  name: 'ResourceOrderField',
  description: 'Properties by which resource connections can be ordered.',
});

@InputType()
export class ResourceOrder extends Order {
  field: ResourceOrderField;
}
