/**
 * Impelemts a simple echo server
 * 
 */

var express = require('express');
var bodyParser = require("body-parser");
var app = express();

/**
 * Allow cross origin
 */
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
  
});

/**
 * Use body parser to parse post request
 */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * Simple echo server
 * @param {Object} req 
 * @param {Object} res
 * @param {Object} next
 * @returns {void}
 */
app.post('/', function(req, res) {
  var name = "";
  name = req.body.name.split("=")[1]; //have to
  console.log(name);
  res.send("Hello "+name);
  res.end();

}).listen(8080); //listens to port 8080

