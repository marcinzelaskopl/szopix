import React, { Component } from 'react';
import './App.scss';
import Main from "./js/Main";
import Inner from "./js/Inner";



class App extends Component {
  render() {
    return (
      <div>
        <Main/>
        <Inner/>
      </div>
    );
  }
}

export default App;
