import React, { Component } from 'react'
import TopicSection from './TopicSection';

export class Topic extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.isVisible ? 
          <TopicSection isVisible = {this.props.isVisible}/>
          : null
        }
      </div>
    )
  }
}

export default Topic
