import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
class User {
  @Field(() => ID)
  id!: number;

  @Field()
  firstName?: string;

  @Field()
  lastName?: string;

  @Field()
  email!: string;

  // @Field()
  // name: string;

  password!: string;
}

export default User;
