//model
const mongoose = require ('mongoose');

mongoose.Promise = global.Promise;

const hotelSchema = new mongoose.Schema({
	Idroom: String,
	Typeroom: String,
	Payment: Number,
	Numberroom: Number,

});

const Hotel = mongoose.model('Hotel', hotelSchema)

module.exports = Hotel