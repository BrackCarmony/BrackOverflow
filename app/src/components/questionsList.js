import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import QuestionListItem from './questionListItem'
import { addQuestion, getQuestions } from '../actions/';


class QuestionsList extends Component{

  componentWillMount(){
    console.log("Get Stuff Here");
    this.props.getQuestions();
  }

  render(){
    return (
      <ul>
        <button
          onClick = {() => this.props.addQuestion({title:'newQuestion', votes:0, views:0, answers:0})}>
          Push Me!
        </button>
        {this.props.questions.map(question => (<QuestionListItem onClickEvent = {this.onClick.bind(question)} key = {question.title} question = {question}></QuestionListItem>))}
      </ul>
    )
  }

  onClick(){
    console.log("Alert");
    console.log(this);
  }
}

function mapStateToProps(state){
  console.log("Mapping State", state);
  return {
    questions:state.questions
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ addQuestion:addQuestion, getQuestions:getQuestions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsList)
