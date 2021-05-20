import { GraphQLNonNull, GraphQLString } from "graphql";
import bcrypt from 'bcryptjs';

import User from '../models/User';
import userGraphqlType from '../schema/user';

const register = {
  type: userGraphqlType,
  args: {
    firstName: {
      type: new GraphQLNonNull(GraphQLString),
    },
    lastName: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: async (_source: unknown, args: {
    firstName?: string,
    lastName?: string,
    email?: string,
    password?: string }
  ): Promise<User> => {
    const { firstName, lastName, email, password } = args;
    let hashedPassword;

    if (password) {
      hashedPassword = await bcrypt.hash(password, 12);
    }

    const user = await User.query().insert({
      firstName,
      lastName,
      email,
      password: hashedPassword
    });

    return user;
  }
};

export { register }
