import React, { Component } from 'react'

export class SideNav extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.catHandler()} >
          Cat 1
        </button>
      </div>
    )
  }
}

export default SideNav
