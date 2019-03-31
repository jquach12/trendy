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
          <h2> Trendy</h2>
        </div>
      </div>
    )
  }
}

export default NavBar
