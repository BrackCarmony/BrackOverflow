var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");


var questionCtrl = require("./controllers/questionCtrl");

var app = express();


var mongoUri = "mongodb://0.0.0.0:27017/brack_overflow";

mongoose.connect(mongoUri);

app.use(bodyParser.json())
// app.use(function(req, res, next){
//   console.log(req);
//   next();
// })
app.use(express.static(__dirname + '/../public'));

var port = 8080;

app.get('/api/questions', questionCtrl.index);
app.get('/api/questions/:id', questionCtrl.show);
app.post('/api/questions', questionCtrl.create);

app.listen(port, function(){
  console.log("Awakening on port:", port);
})
