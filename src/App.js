// @flow
import React, { Component } from 'react';
import logo from './img/reacteshop-logo-100.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-title">React Eshop</h2>
        </div>
        <p className="App-intro">
          Easily reusable Eshop in React
        </p>
      </div>
    );
  }
}

export default App;
