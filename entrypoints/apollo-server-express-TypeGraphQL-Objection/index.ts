import { ApolloServer } from 'apollo-server-express';
import Express from "express";
import { buildSchema } from 'type-graphql';
import "reflect-metadata"

import { RegisterResolver } from './modules/user/Register';
import dbSetup from './db/db-setup';

const main = async () => {
  dbSetup();

  const schema = await buildSchema({
    resolvers: [RegisterResolver],
   });

  const apolloServer = new ApolloServer({ schema })

  const app = Express();

  apolloServer.applyMiddleware({app});

  app.listen(4000, () => console.log('server started on http://localhost:4000/graphql'));
}

main();
