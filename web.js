var express = require('express'),
http = require('http'),
https = require('https'),
fs = require('fs'),
MongoClient = require('mongodb').MongoClient,
Server = require('mongodb').Server;

var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 8080);

app.get('/', function(req, res) { var data = fs.readFileSync('index.html').toString();
res.send(data);
});





var mongoclient = new MongoClient(new Server('localhost', 27017, {'native_parser': true } ));

var db = MongoClient.db('Course');
