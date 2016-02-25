import React, { Component } from 'react';
// import Link

export default class navBar extends Component{
  render(){
    return (
      <div className = "navBar cf">
        <div className='contain'>
          <div className ="logo">
            Brack Overflow
          </div>
          <ul className = "cf">
            <li>Projects</li>
            <li>About</li>
          </ul>
        </div>
      </div>
    )
  }
}
