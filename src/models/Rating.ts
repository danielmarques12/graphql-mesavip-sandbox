import 'reflect-metadata';
import { Field, ID, ObjectType } from 'type-graphql';
import { User } from '@models/User';
import { Restaurant } from '@models/Restaurant';

@ObjectType()
export class Rating {
  @Field((type) => ID)
  id: string;

  @Field((type) => String)
  rating: number;

  @Field((type) => User, { nullable: true })
  user?: User | null;

  @Field((type) => Restaurant, { nullable: true })
  restaurant?: Restaurant | null;
}
