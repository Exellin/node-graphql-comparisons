import { ApolloServer } from 'apollo-server-express';
import Express from "express";
import { GraphQLSchema } from "graphql";

import query from './query';
import mutation from './mutation';
import dbSetup from './db/db-setup';

const main = async () => {
  dbSetup();

  const schema: GraphQLSchema = new GraphQLSchema({
    query,
    mutation
  });

  const apolloServer = new ApolloServer({ schema })

  const app = Express();

  apolloServer.applyMiddleware({app});

  app.listen(4000, () => console.log('server started on http://localhost:4000/graphql'));
}

main();
