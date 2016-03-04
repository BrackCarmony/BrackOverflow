import React, { Component } from 'react';


export default class register extends Component{
  constructor(props){
    console.log("-----", props);
    super(props);
    this.state = {mode:"register"}
  }
  pickState(){
    if (this.state.mode =="register"){
      return (
        <div>
          <input type="email" placeholder= "email" value={this.state.email}  onChange= {(e)=>this.setState({'email':e.target.value})}/>
          <input type="password" placeholder= "password" value={this.state.password} onChange= {(e)=>this.setState({'password':e.target.value})}/>
          <input type="display_name" placeholder= "username" value={this.state.display_name} onChange= {(e)=>this.setState({'display_name':e.target.value})}/>
          <button className = "solidButton">Register</button>
          <button className = "smallButton solidButton" onClick = {()=>this.setState({'mode': 'sign-in'})}>Sign-in</button>
        </div>
      );

    }else{

      return (
        <div>
          <input type="email" placeholder= "email" value={this.state.email}  onChange= {(e)=>this.setState({'email':e.target.value})}/>
          <input type="password" placeholder= "password" value={this.state.password} onChange= {(e)=>this.setState({'password':e.target.value})}/>
          <button className = "solidButton">Sign-in</button>
          <button className = "smallButton solidButton" onClick = {()=>this.setState({'mode': 'register'})}>Register</button>
        </div>
      );


    }
  }
  render(){
    return (
      <div className = "register">
        <div className = {this.props.shown?"darkScreen":"noScreen"} onClick={()=>this.props.cancel()}>
          <div className = {this.props.shown?"shownModal":"hiddenModal"} onClick={(e)=>e.stopPropagation()}>
            <span className = "cancel" onClick={()=>this.props.cancel()}> X </span>
            <div className = "centerDiv">

              {this.pickState()}

            </div>
          </div>
        </div>
      </div>
    )
  }
}

register.defaultProps = {
  shown:false
}
