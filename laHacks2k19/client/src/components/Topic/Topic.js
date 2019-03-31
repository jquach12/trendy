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
              <TopicSection name={"Trump"} isVisible = {this.props.isVisible}/>
            </div>
            <div className="row">
              <TopicSection name={"Mueller"} isVisible = {this.props.isVisible}/>
            </div>
            <div className="row">
              <TopicSection name={"USA"} isVisible = {this.props.isVisible}/>
            </div>
          </div>
          : null
        }
      </div>
    )
  }
}

export default Topic
