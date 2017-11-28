import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CocktailsContainer from './containers/CocktailsContainer.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={CocktailsContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
