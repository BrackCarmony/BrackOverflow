import React, { Component } from 'react';

import QuestionsList from './questionsList.js'
import InfoBox from './infoBox.js'

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
