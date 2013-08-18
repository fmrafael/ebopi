var express = require('express'),
http = require('http'),
https = require('https'),
fs = require('fs'),
mongo = require('mongodb'),

app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 8080);

app.get('/', function(req, res) { var data = fs.readFileSync('index.html').toString();
res.send(data);
});


http.createServer(app).listen(app.get('port'), function() { console.log("Listening on" + app.get('port'))});



var mongoUri = process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
'mongodb://localhost/mydb';



mongo.Db.connect(mongoUri, function (err, db) {
  db.collection('mydocs', function(er, collection) {
    collection.insert({'mykey': 'myvalue'}, {safe: true}, function(er,rs) {
    });
  });
});
