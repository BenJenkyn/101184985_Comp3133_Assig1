const { gql } = require("apollo-server-express");

exports.typeDefs = gql`
  type Hotel {
    hotel_id: ID!
    hotel_name: String!
    street: String!
    city: String!
    postal_code: String!
    price: Float!
    email: String!
    user_id: Int!
  }
`;
