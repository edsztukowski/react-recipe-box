import React, { Component } from 'react';
import './App.css';
var Header = require('./Header')
var RecipeContainer = require('./RecipeContainer')

class App extends Component {
  render() {
    return (
      <div className="App row">
        <Header />
        <RecipeContainer />
      </div>
    );
  }
}

export default App;
