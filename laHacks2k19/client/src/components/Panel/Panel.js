import React, { Component } from 'react'
import './panelStyles.css'
import laTimes from '../../assets/la-times.jpg';

export class Panel extends Component {
  constructor(props)
  {
    super(props);

    this.state = { 
      // imgUrl: 'https://pmcdeadline2.files.wordpress.com/2018/09/trump1.jpg?w=446&h=299&crop=1',
      imgUrl: laTimes,
      title: 'Trump does a thing',
      isVisible: this.props.isVisible
    };
  }
  render() {
    return (
      <div>
        {this.props.isVisible ?
          (
            <div className="imgFigure">
              <a href={this.props.link} target='_blank'><img className = 'topicImg'  src = {this.state.imgUrl} alt = "temp trump image" ></img></a>
              <figcaption className="caption"> {this.props.title} </figcaption>
            </div>
          )
          : null
        }
      </div>
    )
  }
}

export default Panel
