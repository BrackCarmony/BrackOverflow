var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var session = require("express-session");
var serverConfig = require("./config/server.config.js");
var MongoStore = require('connect-mongo')(session);
var passport = require("passport");

var questionCtrl = require("./controllers/questionCtrl");

var app = express();
//require('./config/passport')(app, )

var mongoUri = "mongodb://0.0.0.0:27017/brack_overflow";

mongoose.connect(mongoUri);
var sessionOptions = {
  mongooseConnection: mongoose.connection
};
app.use(session({
  secret: serverConfig.sessionSecret,
  store: new MongoStore(sessionOptions)
}));
app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());
require('./config/passport')(app, passport);

var port = 8080;

app.get('/api/questions', questionCtrl.index);
app.get('/api/questions/:id', questionCtrl.show);
app.post('/api/questions', questionCtrl.create);

app.listen(port, function(){
  console.log("Awakening on port:", port);
})
