import React, { Component } from 'react';
import './App.css';
import Topic from './components/Topic';
import SideNav from './components/SideNav/SideNav';
import Category from './components/Category';
import NavBar from './components/NavBar/NavBar';

class App extends Component {

  state = {
    region: "us",
    isCat: false,
    category: "cat1"
  }

  selectCategory = (category) => {
    this.setState({isCat: true});
    this.setState({category});
  }

  selectTrending = () => {
    this.setState({isCat: false});
  }
  
  changeRegion = (region) => {
    this.setState({region})
  }

  render() {
    return (
      <div className="App">
        <NavBar changeRegion={this.changeRegion}/>
        <div className="main">
          <SideNav 
            selectCategory={this.selectCategory} 
            selectTrending={this.selectTrending} 
          />
          {this.state.isCat 
            ? <Category /> 
            : <Topic region = {this.state.region} /> 
          }
        </div>
      </div>
    );
  }
}

export default App;
