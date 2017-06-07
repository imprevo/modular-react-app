import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './img/logo.svg';
import './index.css';
import Menu from '../Menu';

class App extends Component {
  static propTypes = {
    routeList: PropTypes.array,
  };

  render() {
    const { children, routeList } = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Modular React App</h2>
        </div>
        <Menu routeList={routeList} />
        {children}
      </div>
    );
  }
}

export default App;
