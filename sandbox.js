//
//  sandbox.js
//    Example webserver with node, express, and jade
//

var express = require('express');
var http = require('http');
var fs = require('fs');

var app = express();
console.log(' launching webserver...');

//----------------------------------------------------------

http.createServer(app).listen(8000);

app.set('views', __dirname+'/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname+'/public'));
app.use(express.logger('dev'));
app.use(app.router);
app.use(function(req, res) {
  res.status(404);
  res.render('404', {'title': 'Page Not Found'});
});

//----------------------------------------------------------

app.get('/', function(req, res) {
  res.status(200);
  res.render('index');
});

console.log(' listening on all interfaces on port 8000');
