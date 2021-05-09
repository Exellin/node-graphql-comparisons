import { GraphQLObjectType } from "graphql";
import { userQueryField, usersQueryField } from "./userQueries";

const query = new GraphQLObjectType({
  name: "Query",
  fields: {
    user: userQueryField,
    users: usersQueryField
  },
});

export default query;
