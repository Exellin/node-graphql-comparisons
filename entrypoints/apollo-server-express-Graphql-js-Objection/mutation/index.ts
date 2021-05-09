import { GraphQLObjectType } from "graphql";
import { register } from "./userMutations";

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    register
  }
});

export default mutation;
