reference: https://www.youtube.com/watch?v=zbIl2kuP7tE

- node server: express
- graphql server: apollo-server-express
- ORM: Objection
- Schema / Resolver creation: graphql-js and GraphQL code generator

- Run migrations with `npx knex migrate:latest `
- rollback migrations with `npx knex migrate:rollback`
- start the server with `nodemon entrypoints/apollo-server-express-Graphql-js-Objection-GraphQL-code-generator/index.ts`
- Generate schema with `npm run generate-schema`
