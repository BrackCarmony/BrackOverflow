import React, { Component } from 'react';

export default class questionsListItem extends Component{
  render(){
    return (
      <li className = "questionListItem">
        <div>
          <div onClick = {this.props.onClickEvent}>
            {this.props.question.title}
          </div>
          <div className = "tags cf">
            <div>
              <span>Answers: </span><span>{this.props.question.answers}</span>
            </div>
            <div>
              <span>Votes: </span><span>{this.props.question.votes}</span>
            </div>
            <div>
              <span>Views: </span><span>{this.props.question.views}</span>
            </div>
          </div>
        </div>
      </li>
    )
  }
}
