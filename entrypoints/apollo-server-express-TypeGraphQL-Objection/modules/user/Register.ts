import { Resolver, Query, Mutation, Arg, FieldResolver, Root } from "type-graphql";
import * as bcrypt from 'bcryptjs';
import User from "../../models/User";

@Resolver(User)
export class RegisterResolver {
  @Query(() => [User], {})
  async users(): Promise<User[]> {
    return await User.query();
  }

  @Query(() => User, {nullable: true})
  async user(
    @Arg('id') id: number,
  ): Promise<User | undefined> {
    return await User.query().findById(id);
  }

  @FieldResolver()
  async name(@Root() parent: User) {
    return `${parent.firstName} ${parent.lastName}`
  }

  @Mutation(() => User, {})
  async register(
    @Arg('firstName') firstName: string,
    @Arg('lastName') lastName: string,
    @Arg('email') email: string,
    @Arg('password') password: string
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.query().insert({
      firstName,
      lastName,
      email,
      password: hashedPassword
    });

    return user;
  }
}