import React, { Component } from 'react'
import './styles.css';
import cloudUS from "../../data/title_cloud_us.png";
import cloudUK from "../../data/title_cloud_uk.png";
import cloudAUS from "../../data/title_cloud_aus.png";
import sentimentPlot from "../../data/articleTitleCompound.png";

export class Blog extends Component {
  render() {
    return (
      <div className="blog">
        <h2> Some Insight of News Across the US, UK, and Australia </h2>
        <div className="text"> Online News has definitely evolved over the years. Terms like "clickbait" and "fake news" have grown to be popular phrases in the modern world. Taboola was courteous enough to give us some of the most popular news articles across the world over the weekend to analyze.</div>

        <br></br>
        <h2> Headlines </h2>

        <div className="text"> Sociological studies have shown that people are likely to only engage with the titles of articles, which is to say that the titles of articles are becoming larger factors for increasing the Click-Through Rate of your article as titles alone are often enough for people to spread the news despite not reading the rest of the content.
        Our team has found the most frequent words and phrases of articles across the regions. </div>



        <h3> Top Words in US Article Titles </h3>

        <div className="text"><img src={cloudUS} alt="image" /></div>

        <h3> Top Words in UK Article Titles </h3>

        <div className="text"><img src={cloudUK} alt="image" /></div>

        <h3> Top Words in Australia Article Titles </h3>

        <div className="text"><img src={cloudAUS} alt="image" /></div>

        <div className="text"> What is interesting to note is that despite this variance in word choice, the titles of the top articles of all these regions have similar sentiment scores (based on Valence Aware Dictionary and sEntiment Reasoner). </div>

        <h3> Title Sentiment Plot </h3>

        <div className="text"><img src={sentimentPlot} alt="image" /></div>
      </div>
    )
  }
}

export default Blog
