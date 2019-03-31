import React, { Component } from 'react'
import './styles.css';

export class NavBar extends Component {
  render() {
    return (
      <div className="container">
        <a href="/" >Logo</a>
        <div className="region"> 
          <button onClick={this.props.changeRegion.bind(this, 'us')}> US</button>
          <button onClick={this.props.changeRegion.bind(this, 'uk')}> UK</button>
          <button onClick={this.props.changeRegion.bind(this, 'au')}> AU</button>
        </div>
      </div>
    )
  }
}

export default NavBar
