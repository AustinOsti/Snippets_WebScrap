var express = require('express');
var cheerio = require('cheerio');
var request = require('request');
var axios = require('axios');
var Nightmare = require('nightmare');
var path = require('path');

var app = express();
var router = express.Router();
var nightmare = Nightmare({show: true})

app.set('port', process.env.PORT || 3000);

var url = 'http://localhost:'+app.get('port');
//var url = 'https://news.ycombinator.com';

//***** Step 1: Fetch HTML data by making an HTTP request by using request, axios or nightmare

/* Option 1	- Using request 
request({
	method: 'GET',
	url: url
}, function(err, res, body) {
	if (err) return console.error(err);
	getData(body);
});
*/

/* Option 2 - Using axios 
axios.get(url)
.then(function(response){
	getData(response.data);
})
.catch(function(error){
	console.log(error);
});
*/

/* Option 3 - Using nightmare */ 
nightmare
.goto(url)
.wait('body')
.evaluate(function(){
	return document.querySelector('body').innerHTML
})
.end()
.then(function(response){
	getData(response);
})
.catch(function(err){
	console.log(err);
});
//*/	

// ****** Step2: parse the HTML with Cheerio.js
var getData = function(html){
	let $ = cheerio.load(html);
	let h1 = $('h1');
	console.log(h1.text());

	//loop over elements: retrieve hobbies in an array
    let hobbies = [];
    $('li').each(function (i, e) {
        hobbies[i] = $(this).text();
    });
    console.log(hobbies);	
}

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
