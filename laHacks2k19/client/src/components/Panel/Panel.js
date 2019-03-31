import React, { Component } from 'react'
import './panelStyles.css'

export class Panel extends Component {
  constructor(props)
  {
    super(props);

    this.state = { 
      imgUrl: 'https://pmcdeadline2.files.wordpress.com/2018/09/trump1.jpg?w=446&h=299&crop=1',
      title: 'Trump does a thing',
      isVisible: this.props.isVisible
    };
  }
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.isVisible ?
          (
            <figure className="imgFigure">
              <a href={this.props.link} target='_blank'><img className = 'topicImg'  src = {this.state.imgUrl} alt = "temp trump image" ></img></a>
              <figcaption > {this.props.title} asdfdsafds sdff sdfsd dsfsd</figcaption>
            </figure>
          )
          : null
        }
        
      </div>
    )
  }
}

export default Panel
