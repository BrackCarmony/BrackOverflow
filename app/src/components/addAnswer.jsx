import React, { Component } from 'react';
import {connect} from 'react-redux';


import {fetchQuestion} from '../actions/index';
import {Link} from 'react-router';

class QuestionPage extends Component{
  componentWillMount(){
    this.props.fetchQuestion(this.props.params.id);
  }

  renderComments(comments){
    if (!comments) return [];
    return comments.map((comment) => (<div className = "comment" key={comment._id}> {comment.body} </div>))
  }

  renderAnswers(){
    if(!this.props.question.answers) return [];
      return this.props.question.answers.map((answer) => (
        <div className = "answer">
          <div>{answer.body}</div>
          <div>{answer.votes}</div>
          <div>{this.renderComments(answer.comments)}</div>
        </div>
      ));
  }

  render(){
    return (
      <div>
        <Link to = "/"> Brack Overflow </Link>
        <div>{this.props.question.title}</div>
        <div>{this.props.question.body}</div>
        <div>{this.renderAnswers()}</div>
      </div>)
  }
}

function mapStateToProps(state){
  return {question:state.currentQuestion};
}

export default connect (mapStateToProps, {fetchQuestion})(QuestionPage);
