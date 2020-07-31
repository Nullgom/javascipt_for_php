'use strict';
var express = require("express");
var app = express();

var fs = require("fs");

function hello(sender, punc) {
    punc = punc || "!!";
    return "Hello from " + sender + punc;
}
app.get("/", function (req, res) {
    res.send(hello("Javascript", "🤷‍♀👍"));

});

app.listen(3000);