
var mongoose = require('mongoose');

var ObjectId = mongoose.Schema.Types.ObjectId;
var commentSchema = new mongoose.Schema({
    body:String,
    creator:{type:ObjectId, ref:'User'},
})

var answerSchema = new mongoose.Schema({
  body:String,
  votes:String,
  _creator:{type:ObjectId, ref:'User'},
  comments:[commentSchema]
});

var schema = new mongoose.Schema({
  title:{type:String, required:true},
  body:{type:String},
  views:{type:Number, default:0},
  votes:{type:Number, default:0},
  _creator:{type:ObjectId, ref:'User'},
  answers:[answerSchema]
});

module.exports = mongoose.model('Question', schema);
