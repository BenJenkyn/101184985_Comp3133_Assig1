const express = require("express");
const mongoose = require("mongoose");
const TypeDefs = require("./schema");
const Resolvers = require("./resolvers");
const bodyParser = require("body-parser");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");
const User = require("./schemas/userSchema");
const Hotel = require("./schemas/hotelSchema");
const Booking = require("./schemas/bookingSchema");

const dotenv = require("dotenv");
dotenv.config();

const url = process.env.MONGODB_URL;

const connect = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

connect.then(
  (db) => {
    console.log("Connected to the server");
  },
  (err) => {
    console.log(err);
  }
);

const server = new ApolloServer({
  typeDefs: [
    TypeDefs.typeDefs,
    User.typeDefs,
    Hotel.typeDefs,
    Booking.typeDefs,
  ],
  resolvers: Resolvers.resolvers,
});

const app = express();
app.use(bodyParser.json());
app.use("/graphql", cors());
server.applyMiddleware({ app });
app.listen({ port: process.env.PORT }, () =>
  console.log(
    `GraphQL found at http://localhost:${process.env.PORT}${server.graphqlPath}`
  )
);
