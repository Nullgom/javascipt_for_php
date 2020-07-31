'use strict';
var express = require("express");
var app = express();

var fs = require("fs");

var makeGreeter = require("./lib/makeGreeter");
var hello = makeGreeter("hello");
var howdy = makeGreeter("howdy partner, how are you", "?");

app.get("/", function (req, res) {
    res.send(howdy("JS", "🤷‍♀👍"));
});

app.get("/hello/:from", function (req, res) {
    res.send(hello(req.params.from.toUpperCase()));
});

app.get("/howdy/:from", function (req, res) {
    res.send(howdy(req.params.from.toUpperCase()));
});

app.listen(3000);