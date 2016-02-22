import React, { Component } from 'react';

import QuestionsList from './questionsList.js'
import InfoBox from './infoBox.js'

export default class homePage extends Component{
  render(){
    return (
      <div>
      This is Main Page
        <QuestionsList />
        <InfoBox />
      </div>
    )
  }
}
