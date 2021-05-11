Run the server with `npx postgraphile -c "postgresql://shawnc:password@localhost:5432/node-graphql-comparisons?schema=public"`

It is all ready to go.  Create a user with the following:

```gql
      mutation createUser($input: CreateUserInput!) {
        createUser(input: $input) {
          user {
            id
            firstName
            lastName
          }
        }
      }
```

query users with:

```gql
  {
    allUsers {
      edges {
        node {
          id
          firstName
          lastName
          email
          password
        }
      }
    }
  }
```

However due to just being based on the database, password is visible and not hashed by default.

find a single user with:

```gql
  {
    userById(id: 1) {
      id
      firstName
      lastName
    }
  }
```

