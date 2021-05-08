node server: express
graphql server: apollo-server-express
ORM: typeORM
Schema / Resolver creation: TypeGraphQL

Run migrations with `npm run typeorm migration:run`
rollback migrations with `npm run typeorm migration:revert`
start the server with `nodemon entrypoints/apollo-server-express--TypeGraphQL-typeORM/index.ts`
