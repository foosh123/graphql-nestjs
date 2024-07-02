import { Field, ID, ObjectType, createUnionType } from '@nestjs/graphql';

@ObjectType()
export class NormalPost {
  @Field(() => ID)
  id: number;

  @Field()
  author: string;

  @Field()
  body: string;

  @Field()
  dateCreated: string;

  @Field()
  dateUpdated: string;

  @Field()
  title: string;
}

@ObjectType()
export class LinkedPost {
  @Field(() => ID)
  id: number;

  @Field()
  author: string;

  @Field()
  link: string;

  @Field()
  dateCreated: string;

  @Field()
  dateUpdated: string;

  @Field()
  title: string;
}

export const Post = createUnionType({
  name: 'Post', // the name of the GraphQL union
  types: () => [NormalPost, LinkedPost] as const,
  resolveType(value) {
    if (value.body) {
      return NormalPost;
    }
    if (value.link) {
      return LinkedPost;
    }
    return null;
  },
});

@ObjectType()
export class User {
  @Field(() => ID)
  id: number;

  @Field()
  email: string;

  @Field(() => [Post])
  posts: Array<typeof Post>;

  @Field()
  username: string;
}
