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
      console.log(result);
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
