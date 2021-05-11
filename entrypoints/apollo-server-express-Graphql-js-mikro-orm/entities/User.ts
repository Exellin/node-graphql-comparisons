import { BaseEntity, Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
class User extends BaseEntity<User, 'id'> {
  constructor({firstName, lastName, email, password}: {firstName?: string, lastName?: string, email?: string, password?: string}) {
    super()

    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }

  @PrimaryKey()
  id!: number;

  @Property()
  firstName?: string;

  @Property()
  lastName?: string;

  @Property()
  email?: string;

  @Property()
  password?: string;

  name(): string {
    return `${this.firstName} ${this.lastName}`
  }
}

export default User;
