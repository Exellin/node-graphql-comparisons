import { Model } from 'objection';

class User extends Model {
  static tableName = 'user';

  id!: number;
  firstName?: string
  lastName?: string
  email!: string;
  password!: string;

  name(): string {
    return `${this.firstName} ${this.lastName}`
  }
}

export default User;
