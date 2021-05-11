import { GraphQLNonNull, GraphQLInt, GraphQLList } from "graphql";
import { MikroORM } from '@mikro-orm/core';

import User from '../entities/User';
import userGraphqlType from '../schema/user';

const orm = await MikroORM.init({
    migrations: {
      path: '/home/shawnc/programming/node-graphql-comparisons/entrypoints/apollo-server-express-Graphql-js-mikro-orm/migrations'
    },
    entities: [User],
    dbName: 'node-graphql-comparisons',
    type: `postgresql`
  })

const userQueryField = {
  type: userGraphqlType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  },
  resolve: async (_source: unknown, { id }: { id?: number }): Promise<User | null> => orm.findOne(User, {id})
};

const usersQueryField = {
  type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(userGraphqlType))),
  resolve: async (): Promise<User[]> => await orm.em.find(User, {})
}

export { userQueryField, usersQueryField }

