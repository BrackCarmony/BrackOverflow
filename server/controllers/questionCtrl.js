var def = [{
  title:"This is a question",
  answers:0,
  views:5,
  votes:0,
  body:"This is the actual question."
},{
  title:"This is anoter question",
  answers:1,
  views:10,
  votes:5,
  body:"This is the actual question."
},{
  title:"This is more question",
  answers:10,
  views:553,
  votes:100,
  body:"This is the actual question."
},{
  title:"This is yet another question",
  answers:4,
  views:64,
  votes:26,
  body:"This is the actual question."
}];

var Question = require('./../models/Question');


module.exports = {
  index:function(req, res){
    Question.find({}).exec(function(err, questions){
      if(err){
        console.log(err);
        return res.send(500);
      }
      console.log(questions);
      res.send(questions);
    })
  },
  show:function(req, res){
    Question.findById(req.params.id).exec(function(err, result){
      if(err){
        console.log(err);
        return res.sendStatus(500);
      }
      res.send(result)
    })
  },
  create:function(req,res){
    question = new Question(req.body);
    question.save(function(err, result){
      if(err){
        console.log(err);
        return res.send(500);
      }
      res.send(result);
    });
  }
}
