import React, { Component } from 'react'
import './styles.css';

export class SideNav extends Component {
  render() {
    return (
      <div className="links">
        <button onClick={this.props.selectTrending.bind(this)}>Trending</button>
        <button onClick={this.props.selectCategory.bind(this, "cat1")}>Cat 1</button>
        <button onClick={this.props.selectCategory.bind(this, "cat2")}>Cat 2</button>
        <button onClick={this.props.selectCategory.bind(this, "cat3")}>Cat 3</button>
      </div>
    )
  }
}

export default SideNav
