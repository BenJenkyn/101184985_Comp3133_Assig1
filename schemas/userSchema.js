const { gql } = require("apollo-server-express");

exports.typeDefs = gql`
  type User {
    user_id: ID!
    username: String
    password: String
    email: String
  },
`;
