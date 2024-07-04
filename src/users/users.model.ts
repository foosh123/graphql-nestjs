import { Field, ID, InterfaceType, ObjectType } from '@nestjs/graphql';

@InterfaceType()
export abstract class Post {
  @Field(() => ID)
  id: number;

  @Field()
  author: string;

  @Field()
  dateCreated: string;

  @Field()
  dateUpdated: string;

  @Field()
  title: string;
}

@ObjectType({ implements: Post })
export class NormalPost implements Post {
  @Field(() => ID)
  id: number;

  @Field()
  author: string;

  @Field()
  dateCreated: string;

  @Field()
  dateUpdated: string;

  @Field()
  title: string;

  @Field()
  body: string;

  constructor(partial: Partial<NormalPost>) {
    Object.assign(this, partial);
  }
}

@ObjectType({ implements: Post })
export class LinkedPost implements Post {
  @Field(() => ID)
  id: number;

  @Field()
  author: string;

  @Field()
  dateCreated: string;

  @Field()
  dateUpdated: string;

  @Field()
  title: string;

  @Field()
  link: string;

  constructor(partial: Partial<LinkedPost>) {
    Object.assign(this, partial);
  }
}

@ObjectType()
export class User {
  @Field(() => ID)
  id: number;

  @Field()
  email: string;

  @Field(() => [Post])
  posts: Post[];

  @Field()
  username: string;
}
