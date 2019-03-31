import React, { Component } from 'react'
import Panel from '../Panel/Panel';
import './styles.css';

export class TopicSection extends Component {
  constructor(props)
  {
    super(props);

    this.state = { 
      articles: [['Trump becomes the president', 'https://shop.donaldjtrump.com/'], ['title2', 'https://www.amazon.com/slp/donald-trump-funny/q8uegx2smszp5uq'], ['title3' , 'https://awesomestufftobuy.com/donald-trump-gifts/']]
    };
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>{this.props.name}</h3>
        {this.props.isVisible ?
          this.state.articles.map((set, index) =>
            <Panel 
              isVisible = {this.props.isVisible} 
              key = {set[0] + index} 
              title = {set[0]} 
              link = {set[1]}
              className="panel"
            />
          ) 
          : null
        }
      </div>
    )
  }
}

export default TopicSection
