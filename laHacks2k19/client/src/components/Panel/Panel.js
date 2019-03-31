import React, { Component } from 'react'
import './panelStyles.css'
import logo1 from '../../assets/la-times.jpg';
import logo2 from '../../assets/ap-news.jpeg';
import logo3 from '../../assets/business-insider.jpg';
import logo4 from '../../assets/cincinnati.jpg';
import logo5 from '../../assets/cnbc.jpg';
import logo6 from '../../assets/daily-mail.jpg';
import logo7 from '../../assets/e-online.jpg';
import logo8 from '../../assets/huffpost.jpg';
import logo9 from '../../assets/independent.jpg';
import logo10 from '../../assets/inews.jpg';
import logo11 from '../../assets/kent-online.jpg';
import logo12 from '../../assets/ktla.jpg';
import logo13 from '../../assets/liverpool-echo.jpg';
import logo14 from '../../assets/logo.png';
import logo15 from '../../assets/mamamia.jpg';
import logo16 from '../../assets/manchester-evening-news.jpg';
import logo17 from '../../assets/metro.jpg';
import logo18 from '../../assets/mirror.jpg';
import logo19 from '../../assets/msn.png';
import logo20 from '../../assets/nbc-news.png';
import logo21 from '../../assets/news.jpg';
import logo22 from '../../assets/nfl.jpg';
import logo23 from '../../assets/northjersey.jpg';
import logo24 from '../../assets/slate.jpg';
import logo25 from '../../assets/sporting-news.jpg';
import logo26 from '../../assets/standard.jpg';
import logo27 from '../../assets/the-scottish-sun.jpg';
import logo28 from '../../assets/the-sun.jpg';
import logo29 from '../../assets/usa-today.jpg';
import logo30 from '../../assets/usmagazine.jpg';
import logo31 from '../../assets/wales-online.png';

export class Panel extends Component {
  constructor(props)
  {
    super(props);

    this.state = { 
      // imgUrl: 'https://pmcdeadline2.files.wordpress.com/2018/09/trump1.jpg?w=446&h=299&crop=1',
      imgUrl: logo2,
      title: 'Filler Title',
      isVisible: this.props.isVisible
    };
  }

getData = () => {

  let logos = [logo1,logo2,logo3,logo4,logo5,logo6,logo7,logo8,logo9,logo10,logo11,logo12,logo13,logo14,logo15,logo16,logo17,logo18,logo19,logo20,logo21,logo22,logo23,logo24,logo25,logo26,logo27,logo28,logo29,logo30,logo31];

  let randomLogo = logos[Math.floor(Math.random()* logos.length)]
  this.setState(()=>{return {imgUrl: randomLogo};
    });
}

componentDidMount() {
  this.getData();
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
