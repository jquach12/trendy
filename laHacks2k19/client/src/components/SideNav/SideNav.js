import React, { Component } from 'react'
import './styles.css';

export class SideNav extends Component {
  
  state = {
    active: "Trending"
  }
  
  isActive = (category) => {
    return this.state.active===category ? "active" : "non-active";
  }

  changeActive = (category) => {
    this.setState({active: category});
  }

  selectTrending = (category) => {
    this.props.selectTrending(category);
    this.setState({active: category});
  }

  selectCategory = (category) => {
    this.props.selectCategory(category);
    this.setState({active: category});
  }

  render() {

    return (
      <div className="links">
        <button 
          className={this.isActive("Trending")} 
          onClick={this.selectTrending.bind(this, "Trending")}>
          Trending
        </button>
        <button 
          className={this.isActive("Law, Government, and Politics")} 
          onClick={this.selectCategory.bind(this, "Law, Government, and Politics")}>
          Law, Government, and Politics
        </button>
        <button 
          className={this.isActive("Sports")} 
          onClick={this.selectCategory.bind(this, "Sports")}>
          Sports
        </button>
        <button 
          className={this.isActive("Technology and Computing")} 
          onClick={this.selectCategory.bind(this, "Technology and Computing")}>
          Technology and Computing
        </button>
      </div>
    )
  }
}

export default SideNav
