(function() {
  var app, express, http, mongoose, settings;

  http = require("http");

  express = require("express");

  settings = require("./settings");

  app = express();

  http.createServer(app);

  app.listen(3000, "localhost", function() {
    return console.log("success");
  });

  app.get('/', function(req, res) {
    return res.send("こんtには！");
  });

  mongoose = require("mongoose");

  mongoose.connection.on("open", function() {
    return console.log("success");
  });

  mongoose.connection.on("close", function() {
    return console.log("failed");
  });

  mongoose.connect("mongodb://localhost/apple");

}).call(this);
