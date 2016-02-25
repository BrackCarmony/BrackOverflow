import React, { Component } from 'react';

export default class questionsListItem extends Component{
  render(){
    return (
      <li className = "questionListItem">
        <div className = "cf">
          <div className = "tags cf">
            <div>
              <span>{this.props.question.answers}</span><span>answers</span>
            </div>
            <div>
              <span>{this.props.question.votes}</span><span>votes</span>
            </div>
            <div>
              <span>{this.props.question.views}</span><span>views</span>
            </div>
          </div>
          <div className = "questionText" onClick = {this.props.onClickEvent}>
            {this.props.question.title}
          </div>
        </div>
      </li>
    )
  }
}
