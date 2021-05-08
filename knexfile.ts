import { knexSnakeCaseMappers } from 'objection';

export default {
  development: {
    client: 'postgresql',
    connection: {
      user: "shawnc",
      password: "password",
      database: "node-graphql-comparisons",
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'entrypoints/apollo-server-express-TypeGraphQL-Objection/db/migrations'
    },
    ...knexSnakeCaseMappers
  }
};
