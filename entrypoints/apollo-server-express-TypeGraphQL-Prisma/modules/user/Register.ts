import { PrismaClient } from '@prisma/client';
import { Resolver, Query, Mutation, Arg } from "type-graphql";
import bcrypt from 'bcryptjs';
import User from "../../models/User";

const prisma = new PrismaClient();

@Resolver(User)
export class RegisterResolver {
  @Query(() => [User], {})
  async users(): Promise<User[]> {
    return await prisma.user.findMany();
  }

  @Query(() => User, {nullable: true})
  async user(
    @Arg('id') id: number,
  ): Promise<User | null> {
    return await prisma.user.findUnique({
      where: {
        id: id
      }
    })
  }

  // @FieldResolver()
  // async name(@Root() parent: User) {
  //   return `${parent.firstName} ${parent.lastName}`
  // }

  @Mutation(() => User, {})
  async register(
    @Arg('firstName') firstName: string,
    @Arg('lastName') lastName: string,
    @Arg('email') email: string,
    @Arg('password') password: string
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword
      },
    })

    return user;
  }
}
