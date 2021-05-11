import {MigrationInterface, QueryRunner, Table } from "typeorm";

export class addUsers1620429361539 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "user",
      columns: [
        {
            name: "id",
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
        },
        {
            name: "firstName",
            type: "varchar",
        },
        {
            name: "lastName",
            type: "varchar",
        },
        {
            name: "email",
            type: "varchar",
            isUnique: true
        },
        {
            name: "password",
            type: "varchar",
        }
      ]
    }), true)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("user");
  }
}
