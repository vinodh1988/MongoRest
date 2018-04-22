var express= require('express');
var path=require('path');
var app=express();
var restapi=require('./mongoroute.js');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fullstack');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("mongo db connection is open");
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var bodyParser = require('body-parser');
app.use(bodyParser.json()); 



app.use("/rest-api",restapi);

app.listen('7040',function(){
    console.log("Server started and listening on port 7040");
});