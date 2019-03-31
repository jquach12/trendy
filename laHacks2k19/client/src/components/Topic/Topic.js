import React, { Component } from 'react'
import TopicSection from './TopicSection';
import '../../data/aus.json';
import './styles.css';
import trendingTopics from '../../data/topics_us.json'
export class Topic extends Component {

  constructor(props)
  {
    super(props);
      // this.getData = this.getData.bind(this);

      this.state = { 
      trendingTopicHeadline:""
    };
  }

  getData = () => {
    const entries = Object.entries(trendingTopics)

    let headline = "Trending Topics: "
    for(let i = 0; i < 3; i++){

      let topicName = entries[i][0]
      if (topicName == 'usa') topicName = 'USA'
      headline += topicName.charAt(0).toUpperCase() + topicName.slice(1) + ' (';
      
      if (entries[i][1] > 1000000) headline += '1M+ hits) ';
      else if (entries[i][1] > 340000) headline += '340K+ hits) ';
      else if (entries[i][1] > 300000) headline += '300K+ hits) ';
      else headline += '100K+ hits)'

    }
    this.setState(()=>{return {trendingTopicHeadline: headline};
    });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        {this.props.isVisible ? 
          <div>
            <div className="row">
              <TopicSection name={this.state.trendingTopicHeadline} isVisible = {this.props.isVisible}/>
            </div>
            
          </div>
          : null
        }
      </div>
    )
  }
}

export default Topic
