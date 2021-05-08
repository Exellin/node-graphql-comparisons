import { Field, ID, ObjectType } from "type-graphql";
import { Model } from 'objection';

@ObjectType()
class User extends Model {
  static tableName = 'user';

  @Field(() => ID)
  id: number;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  name: string;

  password: string;
}

export default User;
