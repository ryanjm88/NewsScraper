var express = require("express");
var exhbs = require("express-handlebars");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var cheerio = require("cheerio");
var request = require("request");

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.Promise = Promise;

mongoose.connect(MONGODB_URI);

var PORT = 3000;

var app = express();

var db = require("./models");

app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/...");

app.listen(PORT, function() {
    console.log("App listening on port " + PORT + ".");
});