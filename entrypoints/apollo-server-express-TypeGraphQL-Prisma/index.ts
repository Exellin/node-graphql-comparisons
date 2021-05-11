import { ApolloServer } from 'apollo-server-express';
import Express from "express";
import { buildSchemaSync } from 'type-graphql';
import "reflect-metadata"

import { RegisterResolver } from './modules/user/Register';

const main = async () => {
  const schema = await buildSchemaSync({
    resolvers: [RegisterResolver],
   });

  const apolloServer = new ApolloServer({ schema })

  const app = Express();

  apolloServer.applyMiddleware({app});

  app.listen(4000, () => console.log('server started on http://localhost:4000/graphql'));
}

main();
