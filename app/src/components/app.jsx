import React from 'react';
import { Component } from 'react';
import Footer from './footer';
import NavBar from './navBar';
import Register from './register';

export default class App extends Component {

  constructor(props){
    super(props);

    this.state ={show:false};
  }
  toggleShow(){

    this.setState({show:!this.state.show});
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <NavBar />
        <Register shown = {this.state.show} cancel={() => this.toggleShow()}/>
        <button onClick = {() => this.toggleShow()} > Click Me</button>
          {this.props.children}
        <Footer />
      </div>
    );
  }
}
