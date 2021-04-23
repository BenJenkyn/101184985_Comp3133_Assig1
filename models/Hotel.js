const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
    hotel_name: String,
    street: String,
    city: String,
    postal_code: String,
    price: Number,
    email: String,
    user_id: String
});

const Hotel = mongoose.model("Hotel", HotelSchema);
module.exports = Hotel;