import React, { Component } from 'react';
import './App.css';
import Topic from './components/Topic/Topic';
import SideNav from './components/SideNav/SideNav';
import Category from './components/Category/Category';
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
          <div className="sidenav"> 

          <SideNav 
            selectCategory={this.selectCategory} 
            selectTrending={this.selectTrending}
            
          />
          </div>
          <div className="panels">
            {this.state.isCat 
              ? <Category region = {this.state.region} category={this.state.category} isVisible = {this.state.isCat}/> 
              : <Topic region = {this.state.region} isVisible = {!this.state.isCat} /> 
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
