'use strict';
(function() {
    // code...
}());
var express = require("express");
var app = express();

var fs = require("fs");


var myvar = 100;

function makeGreeter(greeting, punc) {
    punc = punc || "!!";

    return function(sender) {
        return sender.trim() + " says " + greeting.trim() + punc.trim();
    }
}
var hello = makeGreeter("hello");
var howdy = makeGreeter("howdy partner, how are you", "?");
app.get("/", function (req, res) {
    res.send(howdy("JS", "🤷‍♀👍"));

});

app.listen(3000);