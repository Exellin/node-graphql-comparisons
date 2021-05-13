import { ApolloServer } from 'apollo-server-micro'
import { GraphQLSchema } from "graphql";

import query from '../../query';
import mutation from '../../mutation';
import dbSetup from '../../db/db-setup';

dbSetup();

const schema: GraphQLSchema = new GraphQLSchema({
  query,
  mutation
});

export const config = {
  api: {
    bodyParser:  false
  }
};

const apolloServer = new ApolloServer({ schema })

export default apolloServer.createHandler({ path: '/api/graphql' })
