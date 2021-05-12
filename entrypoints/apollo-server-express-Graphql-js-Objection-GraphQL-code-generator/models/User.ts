import { Model } from 'objection';

import { User as graphqlUserType } from '../generated/graphql';

interface User extends Omit<graphqlUserType, 'name'> {}

class User extends Model {
  static tableName = 'user';
  password!: string

  name(): string {
    return `${this.firstName} ${this.lastName}`
  }
}

export default User;
