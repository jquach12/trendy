import React, { Component } from 'react'
import Panel from '../Panel/Panel';
import './styles.css';
import lawData from '../../data/lawGovtPolitics.json';
import sportsData from '../../data/sports.json';
import techData from '../../data/tech.json';
import travelData from '../../data/travel.json';
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
    
    let data;

    this.setState({category: this.props.category})

    switch(this.state.category){
      case "Law, Government, and Politics": data = lawData["law, govt and politics"]; break;
      case "Sports": data = sportsData["sports"]; break;
      case "Technology and Computing": data = techData["technology and computing"]; break;
      case "Travel": data = travelData["travel"]; break;
      default: data = lawData["law, govt and politics"];

    }
    console.log(data);

    let articlez = [];

    const maxLength = 65
    for (let i = 0; i < 6; i++) {
      const url = data[Math.floor(Math.random() * data.length)];
      let title = dataPairs[url];

      if (title.length > maxLength) { title = title.substring(0, maxLength) + '...' }
      // const title="test";
      console.log(title, url); 
      articlez.push([title,url])
    }

    console.log(articlez)
    this.setState(()=>{return {articles: articlez};
    });
    console.log(this.state.articles);

  
  }

  componentDidMount() {
    this.getData();
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
