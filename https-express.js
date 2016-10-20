var fs = require('fs');
var https = require('https');
var express = require('express');

var app = express();
app.get('/', function (req, res, next) {
    res.send('hello world');
});

var options = {
    key: fs.readFileSync('certs/key.pem'),
    cert: fs.readFileSync('certs/cert.pem')
};

https.createServer(options, app).listen(8000);