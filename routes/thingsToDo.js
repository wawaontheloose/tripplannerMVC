var router = require('express').Router();
var models = require('../models');

router.get('/', function(req, res, next) {
	models.ThingToDo
		.find()
		.exec(function(err, thingsToDo) {
			if (err) return next(err);
			res.json(thingsToDo);
		});
});

module.exports = router;