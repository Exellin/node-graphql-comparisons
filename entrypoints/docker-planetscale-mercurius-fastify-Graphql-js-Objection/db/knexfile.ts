import { knexSnakeCaseMappers } from 'objection';

export default {
  development: {
    client: 'mysql',
    connection: process.env.DATABASE_URL,
    debug: true,
    ...knexSnakeCaseMappers
  }
};
