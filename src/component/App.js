import React, { Component } from 'react';

//测试模块
import Ceshi from './sunyuxiao/Ceshi';

import logo from '../statle/logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Ceshi/>
      </div>
    );
  }
}

export default App;
