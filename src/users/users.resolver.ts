import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql';
import { User, Post } from './users.model';

@Resolver(() => User)
export class UsersResolver {
  private users = [
    {
      id: 1,
      email: 'user1@example.com',
      username: 'user1',
      posts: [
        {
          __typename: 'NormalPost',
          id: 1,
          author: 'user1',
          body: 'This is a normal post',
          dateCreated: '2024-07-01',
          dateUpdated: '2024-07-01',
          title: 'Normal Post Title',
        },
        {
          __typename: 'LinkedPost',
          id: 2,
          author: 'user1',
          dateCreated: '2024-07-01',
          dateUpdated: '2024-07-01',
          link: 'https://example.com',
          title: 'Linked Post Title',
        },
      ],
    },
  ];

  @Query(() => User)
  user(@Args('id') id: number): User {
    return this.users.find((user) => user.id === id);
  }

  @ResolveField(() => [Post])
  posts(@Parent() user: User): Array<typeof Post> {
    return user.posts;
  }
}
