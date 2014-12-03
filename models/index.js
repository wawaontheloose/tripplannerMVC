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

var daySchema = new mongoose.Schema({
	day_number: Number,
	hotel: {type: mongoose.Schema.Types.ObjectId, ref: 'Hotel'},
	restaurants: [{type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant'}],
	thingsToDo: [{type: mongoose.Schema.Types.ObjectId, ref: 'ThingToDo'}]
});

module.exports = {
	Place: mongoose.model('Place', PlaceSchema),
	Hotel: mongoose.model('Hotel', HotelSchema),
	Restaurant: mongoose.model('Restaurant', RestaurantSchema),
	ThingToDo: mongoose.model('ThingToDo', ThingToDoSchema),
	Day: mongoose.model('Day', daySchema)
};