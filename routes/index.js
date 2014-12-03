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
		function(err, data) {
			if (err) return next(err);
			res.render('index')
		}
	);
});

module.exports = router;