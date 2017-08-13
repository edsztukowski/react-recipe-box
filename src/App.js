import React, { Component } from 'react';
import './App.css';
var Header = require('./Header')
var RecipeContainer = require('./RecipeContainer')
var Footer = require('./Footer')

class App extends Component {
  render() {
    return (
      <div className="App row">
        <Header />
        <RecipeContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
