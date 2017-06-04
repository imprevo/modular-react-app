import React, { Component } from 'react';
import logo from './img/logo.svg';
import './index.css';
import Menu from '../Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Modular React App</h2>
        </div>
        <Menu />
        {this.props.children}
      </div>
    );
  }
}

export default App;
