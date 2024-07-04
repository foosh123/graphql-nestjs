import { Resolver, Query, Args, ID } from '@nestjs/graphql';
import { User, NormalPost, LinkedPost } from './users.model';

@Resolver(() => User)
export class UsersResolver {
  private users: User[] = [
    {
      id: 1,
      email: 'example@example.com',
      username: 'user1',
      posts: [
        new NormalPost({
          id: 1,
          author: 'user1',
          body: 'This is a normal post body',
          dateCreated: '2024-07-01',
          dateUpdated: '2024-07-01',
          title: 'Normal Post Title',
        }),
        new LinkedPost({
          id: 2,
          author: 'user1',
          link: 'https://example.com',
          dateCreated: '2024-07-01',
          dateUpdated: '2024-07-01',
          title: 'Linked Post Title',
        }),
      ],
    },
  ];

  @Query(() => [User])
  async getUsers() {
    return this.users;
  }

  @Query(() => User)
  async getUser(@Args('id') id: number): Promise<User> {
    return this.users.find((user) => user.id === id);
  }
}
