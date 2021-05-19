reference: https://docs.planetscale.com/tutorial/connect-nodejs-app

- node server: fastify
- graphql server: mercurius
- ORM: Objection
- Schema / Resolver creation: graphql-js


- Run a migration with:
  - `pscale branch create node-graphql-comparisons add-users`
  - `pscale shell node-graphql-comparisons add-users`
  - run the following in the shell:
  ```sql
    CREATE TABLE `user` (
    `id` bigint NOT NULL AUTO_INCREMENT,
    `firstName` varchar(1024),
    `lastName` varchar(1024),
    `email` varchar(1024),
    `password` varchar(1024),
    PRIMARY KEY (`id`)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
  ```
  - test changes by connecting to branch with `pscale connect node-graphql-comparisons add-users --execute 'npx ts-node-dev --respawn entrypoints/planetscale-mercurius-fastify-Graphql-js-Objection/index.ts'`
  - `pscale deploy-request create node-graphql-comparisons add-users`
  - `pscale deploy-request list node-graphql-comparisons`
  - `pscale deploy-request deploy node-graphql-comparisons <deploy-request-number>` (found with deploy-request list)

- start the server with `pscale connect node-graphql-comparisons main --execute 'npx ts-node-dev --respawn entrypoints/planetscale-mercurius-fastify-Graphql-js-Objection/index.ts'`

- Add Authentication for production with the following:
  - `pscale service-token create`
  - `pscale service-token add-access r0fwzsus5vqu connect_production_branch --database node-graphql-comparisons`

Then add the following variables to production:

PLANETSCALE_ORG
PLANETSCALE_SERVICE_TOKEN_NAME
PLANETSCALE_SERVICE_TOKEN
