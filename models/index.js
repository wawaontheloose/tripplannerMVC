var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tripplanner');
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

var PlaceSchema = new mongoose.Schema({
	address: String,
	city: String,
	state: String,
	phone: String,
	location: [Number]
});

var HotelSchema = new mongoose.Schema({
	name: String,
	place: [PlaceSchema],
	num_stars: {type: Number, min: 1, max: 5},
	amenities: String
});

var RestaurantSchema = new mongoose.Schema({
	name: String,
	place: [PlaceSchema],
	cuisine: String,
	price: {type: Number, min: 1, max: 5}
});

var ThingToDoSchema = new mongoose.Schema({
	name: String,
	place: [PlaceSchema],
	age_range: String
});

module.exports = {
	Place: mongoose.model('Place', PlaceSchema),
	Hotel: mongoose.model('Hotel', HotelSchema),
	Restaurant: mongoose.model('Restaurant', RestaurantSchema),
	ThingToDo: mongoose.model('ThingToDo', ThingToDoSchema)
};