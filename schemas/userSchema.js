const { gql } = require("apollo-server-express");

exports.typeDefs = gql`
  type User {
    _id: ID!
    username: String
    password: String
    email: String
  },
`;
