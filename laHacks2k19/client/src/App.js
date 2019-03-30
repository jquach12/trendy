import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Topic from './components/Topic';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Topic></Topic> 
      </div>
    );
  }
}

export default App;
