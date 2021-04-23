const Hotel = require("./models/Hotel");
const User = require("./models/User");
const Booking = require("./models/Booking");

exports.resolvers = {
  Query: {
    //Getting the hotel
    getHotels: async () => {
      return await Hotel.find({});
    },
    getHotelByName: async (parent, args) => {
      return await Hotel.find({ hotel_name: args.hotel_name });
    },
    getHotelByCity: async (parent, args) => {
      return await Hotel.find({ city: args.city });
    },
    //For the user profile
    getUsers: async (parent, args) => {
      return await User.find({});
    },
    //For the booking
    getBookings: async (parent, args) => {
      return await Booking.find({});
    },
    getLogin: async({username, password}) => {
      return await User.findOne({username: username, password: password})
    }
  },
  Mutation: {
    //For the hotel
    addHotel: async (parent, args) => {
      let newHotel = new Hotel({
        hotel_name: args.hotel_name,
        street: args.street,
        city: args.city,
        postal_code: args.postal_code,
        price: args.price,
        email: args.email,
        user_id: args.user_id,
      });
      return await newHotel.save();
    },
    //For the User
    addUser: async (parent, args) => {
      let newUser = new User({
        username: args.username,
        password: args.password,
        email: args.email,
      });
      return await newUser.save();
    },
    //For the Booking
    addBooking: async (parent, args) => {
      let newBooking = new Booking({
        hotel_id: args.hotel_id,
        booking_date: args.booking_date,
        booking_start: args.booking_start,
        booking_end: args.booking_end,
        user_id: args.user_id,
      });
      return await newBooking.save();
    },
  },
};
