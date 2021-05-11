import { Migration } from '@mikro-orm/migrations';

export class Migration20210511031429 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "user" ("id" serial primary key, "first_name" varchar(255) not null, "last_name" varchar(255) not null, "email" varchar(255) not null, "password" varchar(255) not null);');
  }

}
