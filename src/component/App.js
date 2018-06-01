import React, { Component } from 'react';

//测试模块
import Login from './sunyuxiao/Login/Login.js';
import MineList from './sunyuxiao/MineList/MineList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
           <MineList/>
          {/*<Login/>*/}
      </div>
    );
  }
}

export default App;
