import React, { Component } from 'react';
import './App.css';
import Topic from './components/Topic';
import SideNav from './components/SideNav';
import Category from './components/Category';
import NavBar from './components/NavBar/NavBar';

class App extends Component {

  state = {
    region: "us",
    isCat: false
  }

  catHandler = () => {
    this.setState({isCat: !this.state.isCat});
  }
  
  changeRegion = (region) => {
    this.setState({region})
  }

  render() {
    return (
      <div className="App">
        <NavBar changeRegion={this.changeRegion}/>
        {this.state.isCat ? <Category /> : <Topic region = {this.state.region} /> }
        <SideNav catHandler = {this.catHandler} />
      </div>
    );
  }
}

export default App;
