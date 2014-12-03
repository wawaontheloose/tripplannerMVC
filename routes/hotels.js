var router = require('express').Router();
var models = require('../models');

router.get('/', function(req, res, next) {
	models.Hotel
		.find()
		.exec(function(err, hotels) {
			if (err) return next(err);
			res.json(hotels);
		});
});

module.exports = router;