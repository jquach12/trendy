import React, { Component } from 'react'
import Panel from '../Panel/Panel';
import './styles.css';
import lawData from '../../data/lawGovtPolitics.json';
import sportsData from '../../data/sports.json';
import techData from '../../data/tech.json';
import travelData from '../../data/travel.json';
import educationData from '../../data/education.json'
import artAndEntertainmentData from '../../data/artAndEntertainment.json'
import businessAndIndustrialData from '../../data/business.json'
import societyData from '../../data/society.json'
import dataPairs from '../../data/lookup.json';

export class Category extends Component {
  constructor(props)
  {
    super(props);
      // this.getData = this.getData.bind(this);

      this.state = { 
      // articles: [['Trump becomes the president', 'https://shop.donaldjtrump.com/'], ['title2', 'https://www.amazon.com/slp/donald-trump-funny/q8uegx2smszp5uq'], ['title3' , 'https://awesomestufftobuy.com/donald-trump-gifts/']]
      articles: [],
      category: this.props.category
      
    };
  }

  getData = () => {
    console.log('hello from category')
    console.log(this.props.region)
    let data;

    this.setState({category: this.props.category})

    switch(this.state.category){
      case "Law, Government, and Politics": data = lawData["law, govt and politics"]; break;
      case "Sports": data = sportsData["sports"]; break;
      case "Technology and Computing": data = techData["technology and computing"]; break;
      case "Travel": data = travelData["travel"]; break;
      case "Education": data = educationData["education"]; break;
      case "Art and Entertainment" : data = artAndEntertainmentData['art and entertainment']; break;
      case "Business" : data = businessAndIndustrialData['business and industrial']; break;
      case "Society" : data = societyData['society']; break;
      default: data = lawData["law, govt and politics"];

    }

    let articlez = [];
    let bouncer = new Set()
    const maxLength = 60;

    const articlesPerPage = 24;
    while (articlez.length < articlesPerPage) {
      const url = data[Math.floor(Math.random() * data.length)];

      if (typeof url === 'undefined' || url.length < 1) continue;
      if(bouncer.has(url)) continue;

      bouncer.add(url)
      let title = dataPairs[url];

      // some do not have titles
      if (typeof title === 'undefined') continue;
      if (title.length > maxLength) { title = title.substring(0, maxLength) + '...' }
      else if (title.length < 1) title = "Untitled";
      // const title="test";
   
      articlez.push([title,url])
    }

    // console.log(articlez)
    this.setState(()=>{return {articles: articlez};
    });
    // console.log(this.state.articles);

  
  }

  componentDidMount() {
    this.getData();
    console.log(this.state.category)
  }

  componentDidUpdate() {
    let data;
    console.log(this.props.category)
    // this.state.category = this.props.category
    switch(this.props.category){
      case "Law, Government, and Politics": data = lawData["law, govt and politics"]; break;
      case "Sports": data = sportsData["sports"]; break;
      case "Technology and Computing": data = techData["technology and computing"]; break;
      case "Travel": data = travelData["travel"]; break;
      case "Education": data = educationData["education"]; break;
      case "Art and Entertainment" : data = artAndEntertainmentData['art and entertainment']; break;
      case "Business" : data = businessAndIndustrialData['business and industrial']; break;
      case "Society" : data = societyData['society']; break;
      default: data = lawData["law, govt and politics"];

    }

    let articlez = [];
    let bouncer = new Set()
    const maxLength = 60;

    const articlesPerPage = 24;
    while (articlez.length < articlesPerPage) {
      const url = data[Math.floor(Math.random() * data.length)];

      if (typeof url === 'undefined' || url.length < 1) continue;
      if(bouncer.has(url)) continue;

      bouncer.add(url)
      let title = dataPairs[url];

      // some do not have titles
      if (typeof title === 'undefined') continue;
      if (title.length > maxLength) { title = title.substring(0, maxLength) + '...' }
      else if (title.length < 1) title = "Untitled";
      // const title="test";
   
      articlez.push([title,url])

      
    }
    console.log(articlez)
    this.state.articles = articlez
  }

  render() {
    
    return (
      <div className="main-content">
        
        <p className="title">{this.props.category}</p>
        
        {this.props.isVisible ?
          this.state.articles.map((set, index) =>
            <Panel 
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

export default Category
