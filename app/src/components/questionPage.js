import React, { Component } from 'react';
import {connect} from 'react-redux';


import {fetchQuestion} from '../actions/index';
import {Link} from 'react-router';

class QuestionPage extends Component{
  componentWillMount(){
    this.props.fetchQuestion(this.props.params.id);
  }

  render(){
    return (
      <div>
        <Link to = "/"> Brack Overflow </Link>
        <div>{this.props.question.title}</div>
        <div>{this.props.question.body}</div>
        <div>{this.props.question.answers}</div>
      </div>)
  }
}


function mapStateToProps(state){
  return {question:state.currentQuestion};
}

export default connect (mapStateToProps, {fetchQuestion})(QuestionPage);
