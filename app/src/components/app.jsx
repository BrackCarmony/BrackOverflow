import React from 'react';
import { Component } from 'react';
import Footer from './footer.js';
import NavBar from './navBar.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
          {this.props.children}
        <Footer />
      </div>
    );
  }
}
