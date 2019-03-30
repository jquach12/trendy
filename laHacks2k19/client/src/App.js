import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Topic from './components/Topic';
import SideNav from './components/SideNav';
import Category from './components/Category';
import NavBar from './components/NavBar';

class App extends Component {
  
  state = {
    region: "us",
    isCat: false
  }

  catHandler = () => {
    this.setState({isCat: !this.state.isCat});
  }
  
  render() {

    console.log(this.state.isCat);
    return (
      <div className="App">
        <NavBar />
        {this.state.isCat ? <Category /> : <Topic region = {this.state.region} /> }
        <SideNav catHandler = {this.catHandler} />
      </div>
    );
  }
}

export default App;
