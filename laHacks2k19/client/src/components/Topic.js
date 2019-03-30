import React, { Component } from 'react'
import TopicSection from './TopicSection';

export class Topic extends Component {
  render() {
    return (
      <div>
        Hello there! { false ? "I'm Howard" : "I'm brian" }
        <br />
        Region: {this.props.region}
        <TopicSection />
      </div>
    )
  }
}

export default Topic
