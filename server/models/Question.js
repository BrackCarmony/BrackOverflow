
var mongoose = require('mongoose');

var ObjectId = mongoose.Schema.Types.ObjectId;

var schema = new mongoose.Schema({
  title:{type:String, required:true},
  body:{type:String},
  views:{type:Number, default:0},
  answers:{type:Number, default:0},
  votes:{type:Number, default:0}
  // _creator:{type:ObjectId, ref:'User'},
  // _answer:{type:ObjectId, ref:'Answer'}
});

module.exports = mongoose.model('Question', schema);
