import React, { Component } from 'react'
import Panel from './Panel';
import './panelStyles.css';

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
        {this.props.isVisible ?
          this.state.articles.map((set, index) =>
            <Panel 
              key = {set[0] + 'td' + index} 
              isVisible = {this.props.isVisible} 
              key = {set[0] + index} 
              title = {set[0]} 
              link = {set[1]}
            />
          )  
          : null
        }
      </div>
    )
  }
}

export default TopicSection
