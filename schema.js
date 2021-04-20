const { gql } = require('apollo-server-express');

exports.typeDefs = gql `
   type Query {
     getHotel: [Hotel]
     getHotelByName(hotel_name: String!): [Hotel]
     getHotelByCity(city: String!): [Hotel]
     getUser: [User]
     getBooking: [Booking]
   }

   type Mutation {
     addHotel(
        hotel_id: ID!
        hotel_name: String!
        street: String!
        city: String!
        postal_code: String!
        price: Float!
        email: String!
        user_id: Int!): Hotel

     addUser(
      user_id: ID!
      username: String!
      password: String!
      email: String!
     ): User

     addBooking(
        hotel_id: Int!
        booking_date: String!
        booking_start: String!
        booking_end: String!
        user_id: Int!
     ): Booking
   }
`