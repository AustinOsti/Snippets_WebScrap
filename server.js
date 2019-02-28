var express = require('express');
var cheerio = require('cheerio');
var request = require('request');
var path = require('path');

var app = express();

// Start the server
app.set('port', process.env.PORT || 3000);
	
request({
	method: 'GET',
	url: 'http://localhost:'+app.get('port')
}, function(err, res, body) {

	if (err) return console.error(err);

	let $ = cheerio.load(body);

	let title = $('title');
	console.log(title.text());

	//loop over elements: retrieve hobbies in an array
    let hobbies = [];
    $('li').each(function (i, e) {
        hobbies[i] = $(this).text();
    });
    console.log(hobbies);	
});
	
var router = express.Router();

//router middleware. can be used to run scripts before executing the routes below (as in the example below)
router.use(function(req, res, next) {	
	next();
});

//define your routes .... and get corresponding responses
router.get('/', function(req, res) {
	res.sendFile(path.join(__dirname+'/index.html'));
});

// apply the routes to our application
app.use('/', router);

//initialise the server
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
