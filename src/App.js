import React, { Component } from 'react';
import './App.css';
import AppBar from './components/AppBar'
import Search from './components/Search'
import PaperSquare from './components/Paper'
// import CardClever from './components/CardClever'
import Grid from './components/CategoryGrid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar />
        <Search />
        <PaperSquare />
        <Grid />
      </div>
    );
  }
}

export default App;
