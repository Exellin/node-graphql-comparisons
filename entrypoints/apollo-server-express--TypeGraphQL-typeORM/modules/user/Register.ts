import { Resolver, Query, Mutation, Arg, FieldResolver, Root } from "type-graphql";
import bcrypt from 'bcryptjs';
import { User } from "../../entities/User";

@Resolver(User)
export class RegisterResolver {
  @Query(() => [User], {})
  async users(): Promise<User[]> {
    return await User.find();
  }

  @Query(() => User, {nullable: true})
  async user(
    @Arg('id') id: number,
  ): Promise<User | undefined> {
    return await User.findOne(id);
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

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword
    }).save();

    return user;
  }
}
