const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    hotel_id: String,
    booking_date: String,
    booking_start: String,
    booking_end: String,
    user_id: String
});

const Booking = mongoose.model("Booking", BookingSchema);
module.exports = Booking;