reference: https://www.youtube.com/watch?v=zbIl2kuP7tE

- node server: express
- graphql server: apollo-server-express
- ORM: Objection
- Schema / Resolver creation: TypeGraphQL

- Run migrations with `npx knex migrate:latest `
- rollback migrations with `npx knex migrate:rollback`
- start the server with `npx ts-node-dev --respawn entrypoints/apollo-server-express-TypeGraphQL-Objection/index.ts`
