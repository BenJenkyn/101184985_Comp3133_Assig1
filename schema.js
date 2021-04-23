const { gql } = require('apollo-server-express');

exports.typeDefs = gql `
   type Query {
     getHotels: [Hotel]
     getHotelByName(hotel_name: String!): [Hotel]
     getHotelByCity(city: String!): [Hotel]
     getUsers: [User]
     getBookings: [Booking]
     getLogin(username: String!, password:String!): User
   }

   type Mutation {
     addHotel(
        hotel_name: String!
        street: String!
        city: String!
        postal_code: String!
        price: Float!
        email: String!
        user_id: Int!): Hotel

     addUser(
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