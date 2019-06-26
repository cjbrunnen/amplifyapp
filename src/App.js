import React, { Component } from 'react';
import './App.css';
import AppBar from './components/AppBar'
import Search from './components/Search'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar />
        <Search />
        <p className="App-intro">
          Welcome to the PrintZu
        </p>
      </div>
    );
  }
}

export default App;
