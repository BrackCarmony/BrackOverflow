
var mongoose = require('mongoose');

var ObjectId = mongoose.Schema.Types.ObjectId;

var schema = new mongoose.Schema({
  display_name:{type:String, required:true},
  email:{type:String},
  password:{type:Number, default:0}
});

module.exports = mongoose.model('User', schema);
