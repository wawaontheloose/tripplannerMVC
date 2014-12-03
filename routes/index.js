var router = require('express').Router();
var models = require('../models');
var async = require('async');

router.get('/', function(req, res) {
	async.each(['Hotel', 'Restaurant', 'ThingToDo'],
		function(modelName, eachDone) {
			models[modelName].find(function(err, docs) {
				if (!err) res.locals[modelName] = docs;
				eachDone(err);
			});
		},
		function(err) {
			if (err) return next(err);
			res.render('index')
		}
	);
});

router.use('/days', require('./days'));
router.use('/hotels', require('./hotels'));
router.use('/restaurants', require('./restaurants'));
router.use('/thingsToDo', require('./thingsToDo'));

module.exports = router;