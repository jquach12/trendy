import React, { Component } from 'react'
import TopicSection from './TopicSection';
import '../../data/aus.json';
import './styles.css';

export class Topic extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.isVisible ? 
          <div>
            <div className="row">
              <TopicSection name={"australia"} isVisible = {this.props.isVisible}/>
            </div>
            <div className="row">
              <TopicSection name={"first sight"} isVisible = {this.props.isVisible}/>
            </div>
            <div className="row">
              <TopicSection name={"pauline hanson"} isVisible = {this.props.isVisible}/>
            </div>
          </div>
          : null
        }
      </div>
    )
  }
}

export default Topic
