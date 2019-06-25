import React, { Component } from 'react';
import './App.css';
import AppBar from './components/AppBar'


class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar />
        <p className="App-intro">
          Welcome to the PrintZu
        </p>
      </div>
    );
  }
}

export default App;
