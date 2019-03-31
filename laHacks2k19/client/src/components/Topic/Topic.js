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
    console.log(entries)

    let succeedingString = "Trending Topics: "
    for(let i = 0; i < 3; i++){

      succeedingString += entries[i][0].charAt(0).toUpperCase() + entries[i][0].slice(1) + ' (';
      
      if (entries[i][1] > 1000000) succeedingString += '1M+ hits) ';
      else if (entries[i][1] > 340000) succeedingString += '340K+ hits) ';
      else if (entries[i][1] > 300000) succeedingString += '300K+ hits) ';
      else succeedingString += '100K+ hits)'

    }
    this.setState(()=>{return {trendingTopicHeadline: succeedingString};
    });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    console.log(this.props);
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
