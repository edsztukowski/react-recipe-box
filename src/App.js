import React, { Component } from 'react';
import './App.css';
var Header = require('./Header')

class App extends Component {
  render() {
    return (
      <div className="App row">
        <Header />
      </div>
    );
  }
}

export default App;
