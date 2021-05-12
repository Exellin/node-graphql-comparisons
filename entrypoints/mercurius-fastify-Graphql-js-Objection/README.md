reference: https://mercurius.dev/#/?id=quick-start

- node server: fastify
- graphql server: mercurius
- ORM: Objection
- Schema / Resolver creation: graphql-js

- Run migrations with `npx knex migrate:latest `
- rollback migrations with `npx knex migrate:rollback`
- start the server with `npx ts-node-dev --respawn entrypoints/mercurius-fastify-Graphql-js-Objection/index.ts`
