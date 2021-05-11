reference: https://www.youtube.com/watch?v=8yZImm2A1KE&list=PLN3n1USn4xlma1bBu3Tloe4NyYn9Ko8Gs

- node server: express
- graphql server: apollo-server-express
- ORM: typeORM
- Schema / Resolver creation: TypeGraphQL

- Run migrations with `npm run typeorm migration:run`
- rollback migrations with `npm run typeorm migration:revert`
- start the server with `npx ts-node-dev --respawn entrypoints/apollo-server-express--TypeGraphQL-typeORM/index.ts`
