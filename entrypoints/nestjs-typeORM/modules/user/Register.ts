import { Args, Mutation, Query, Resolver, ResolveField, Parent } from '@nestjs/graphql';
import bcrypt from 'bcryptjs';
import { User } from "../../entities/User";

@Resolver(User)
export default class RegisterResolver {
  @Query(() => [User], {})
  async users(): Promise<User[]> {
    return await User.find();
  }

  @Query(() => User, {nullable: true})
  async user(
    @Args('id') id: number,
  ): Promise<User | undefined> {
    return await User.findOne(id);
  }

  @ResolveField(() => String)
  async name(@Parent() parent: User) {
    return `${parent.firstName} ${parent.lastName}`
  }

  @Mutation(() => User, {})
  async register(
    @Args('firstName') firstName: string,
    @Args('lastName') lastName: string,
    @Args('email') email: string,
    @Args('password') password: string
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword
    }).save();

    return user;
  }
}
