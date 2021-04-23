const { gql } = require("apollo-server-express");

exports.typeDefs = gql`
  type Booking {
    _id: ID!
    hotel_id: Int
    booking_date: String
    booking_start: String
    booking_end: String
    user_id: Int
  }
`;
