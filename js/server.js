'use strict';
var express = require("express");
var app = express();

var fs = require("fs");

var makeGreeter = require("./lib/makeGreeter");
var Tweet = require("./lib/tweet");
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

app.get("/tweets/?(:id)?", function(req, res) {
    var tweets = fs.readFileSync("../php/data/tweets.json").toString();
    if(!req.params.id) {
        res.send(tweets);
        return;
    }
    var tweet = JSON.parse(tweets)[req.params.id];
    tweet.id = req.params.id;
    var getTweetJSON = Tweet.prototype.getJSON.bind(tweet);

    // res.send(Tweet.prototype.getJSON.call(tweet));
    res.send(getTweetJSON());

});
app.listen(3000);