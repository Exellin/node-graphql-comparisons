import User from './entities/User';

export default {
  migrations: {
    path: '/home/shawnc/programming/node-graphql-comparisons/entrypoints/apollo-server-express-Graphql-js-mikro-orm/migrations'
  },
  entities: [User],
  dbName: 'node-graphql-comparisons',
  type: `postgresql`
}
