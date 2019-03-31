import React, { Component } from 'react'
import './styles.css';
import logo from '../../assets/logo.png';

export class NavBar extends Component {

  isActive = (region) => {
    return this.props.region===region ? "active" : "non-active";
  }
  
  render() {
    return (
      <div className="container">
        <a href="/" ><img src={logo} width="5%"></img></a>
        <div className="region"> 
          <button 
            className={this.isActive("us")}
            onClick={this.props.changeRegion.bind(this, 'us')}> 
            US
          </button>
          <button 
            className={this.isActive("uk")}
            onClick={this.props.changeRegion.bind(this, 'uk')}> 
            UK
          </button>
          <button 
            className={this.isActive("au")}
            onClick={this.props.changeRegion.bind(this, 'au')}> 
            AU
          </button>
        </div>
      </div>
    )
  }
}

export default NavBar
