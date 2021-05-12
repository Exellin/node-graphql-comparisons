import { GraphQLNonNull, GraphQLInt, GraphQLList } from "graphql";

import User from '../models/User';
import userGraphqlType from '../schema/user';

const userQueryField = {
  type: userGraphqlType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  },
  resolve: async (_source: unknown, { id }: { id?: number }): Promise<User | undefined> => await User.query().findById(id!)
};

const usersQueryField = {
  type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(userGraphqlType))),
  resolve: async (): Promise<User[]> => await User.query()
}

export { userQueryField, usersQueryField }

