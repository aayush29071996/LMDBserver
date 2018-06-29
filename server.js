var express = require('express');
var app = express();
var path = require('path');
var port     = process.env.PORT || 8083;
var bodyParser = require('body-parser');
var routes = require('./routes/androidCloudant');



fs = require('fs');
var http = require('http')
var server = http.createServer(app)



app.use(bodyParser.raw());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', routes);





app.listen(8083);
console.log('Listening  to  port ' + port);

