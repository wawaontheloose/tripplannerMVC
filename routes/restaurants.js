var router = require('express').Router();
var models = require('../models');

router.get('/', function(req, res, next) {
	models.Restaurant
		.find()
		.exec(function(err, restaurants) {
			if (err) return next(err);
			res.json(restaurants);
		});
});

module.exports = router;