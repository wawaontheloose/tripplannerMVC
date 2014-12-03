var router = require('express').Router();
var models = require('../models');

router.param('id', function(req, res, next, id) {
	models.Day
		.findById(id)
		.populate('hotel restaurants thingsToDo')
		.exec(function(err, day) {
			req._day = day;
			next();
		});
})

router.post('/', function(req, res, next) {
	var day = new models.Day(req.body);
	day.save(function(err) {
		if (err) return next(err);
		res.json(day);
	});
});

router.get('/', function(req, res, next) {
	models.Day
		.find()
		.populate('hotel restaurants thingsToDo')
		.exec(function(err, days) {
			if (err) return next(err);
			res.json(days);
		});
});

router.delete('/:id', function(req, res, next) {
	models.Day
		.findByIdAndRemove(req.params.id)
		.exec(function(err, removed) {
			if (err) return next(err);
			res.json(removed);
		});
});

router.get('/:id', function(req, res, next) {
	res.json(req._day);
});


var validFields = ['hotel', 'restaurants', 'thingsToDo'];
router.post('/:id/:field', function(req, res, next) {
	var field = req.params.field,
		day = req._day;
	if (validFields.indexOf(field) === -1) return next();
	if (field === 'hotel') day[field] = req.body;
	else day[field].push(req.body);
	day.save(function(err) {
		if (err) return next(err);
		res.json(day);
	});
});

router.delete('/:id/:field/:fieldId', function(req, res, next) {
	var field = req.params.field,
		day = req._day;
	if (validFields.indexOf(field) === -1) return next();
	if (field === 'hotel') day[field] = undefined;
	else day[field].pull(req.params.fieldId);
	day.save(function(err) {
		if (err) return next(err);
		res.json(day);
	});
});

module.exports = router;