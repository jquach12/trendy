import React, { Component } from 'react';
import './App.css';
import Topic from './components/Topic/Topic';
import SideNav from './components/SideNav/SideNav';
import Category from './components/Category/Category';
import NavBar from './components/NavBar/NavBar';
import Blog from './components/Blog/Blog'

class App extends Component {

  state = {
    region: "us",
    isCat: false,
    category: "Law, Government, and Politics"
  }

  selectCategory = (category) => {
    this.setState({isCat: true});
    this.setState({category});
  }

  selectTrending = (category) => {
    this.setState({isCat: false});
    this.setState({category})
  }
  
  changeRegion = (region) => {
    this.setState({region})
  }

  render() {
    
    return (
      <div className="App">
        <NavBar changeRegion={this.changeRegion} region={this.state.region} />
        <div className="main">
          <div className="sidenav"> 

          <SideNav 
            selectCategory={this.selectCategory} 
            selectTrending={this.selectTrending}
            category={this.state.category}
          />
          </div>
          <div className="panels">
            {this.state.isCat 
              ? (this.state.category==="Blog" 
                ? <Blog />
                : <Category region = {this.state.region} category={this.state.category} isVisible = {this.state.isCat}/> 
                )
              : <Topic region = {this.state.region} isVisible = {!this.state.isCat} /> 
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
