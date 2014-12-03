var express = require('express');
var swig = require('swig');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var sassMiddleware = require('node-sass-middleware');
var debug = require('debug')('tripplanner');

var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
swig.setDefaults({cache: false});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use(sassMiddleware({
	src: __dirname + '/assets',
	dest: __dirname + '/public'
}));
app.use(express.static(__dirname + '/public'));

app.use(require('./routes'));

app.use(function(req, res, next, err) {
	res.status(err.status || 500);
	res.render('error', err);
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
	debug("Be a dear and go to port " + port);
});