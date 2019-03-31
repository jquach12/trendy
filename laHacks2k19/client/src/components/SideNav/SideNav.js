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
         &#9839; Trending 

        </button>
        <button 
          className={this.isActive("Law, Government, and Politics")} 
          onClick={this.selectCategory.bind(this, "Law, Government, and Politics")}>
          &#9878; Law, Government, and Politics 
        </button>
        <button 
          className={this.isActive("Sports")} 
          onClick={this.selectCategory.bind(this, "Sports")}>
          &#9918; Sports 
        </button>
        <button 
          className={this.isActive("Technology and Computing")} 
          onClick={this.selectCategory.bind(this, "Technology and Computing")}>
          &#10121; Technology and Computing 
        </button>
        <button 
          className={this.isActive("Travel")} 
          onClick={this.selectCategory.bind(this, "Travel")}>
          &#9992; Travel
        </button>
        <button 
          className={this.isActive("Education")} 
          onClick={this.selectCategory.bind(this, "Education")}>
          &#10000; Education
        </button>
        <button 
          className={this.isActive("Art and Entertainment")} 
          onClick={this.selectCategory.bind(this, "Art and Entertainment")}>
          &#9733; Art and Entertainment
        </button>
        <button 
          className={this.isActive("Business")} 
          onClick={this.selectCategory.bind(this, "Business")}>
          &#36; Business
        </button>
        <button 
          className={this.isActive("Society")} 
          onClick={this.selectCategory.bind(this, "Society")}>
           &#9787; Society
        </button>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        



        
 
        <button id = "blog"
          className={this.isActive("Blog")} 
          onClick={this.selectCategory.bind(this, "Blog")}>
          &#9998; Blog
        </button>
      </div>
    )
  }
}

export default SideNav
