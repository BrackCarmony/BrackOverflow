import React, { Component } from 'react';

import QuestionsList from './questionsList'
import InfoBox from './infoBox'

export default class homePage extends Component{
  render(){
    return (
      <div>
        <div className = "contain">
          <InfoBox />
          <div className="card">
            <QuestionsList />
          </div>
        </div>
      </div>
    )
  }
}
