import React, { Component } from 'react'

export class Blog extends Component {
  render() {
    return (
      <div>
        <h2> Some Insight of News Across the US, UK, and Australia </h2>

        <p> Online News has definitely evolved over the years. Terms like "clickbait" and "fake news" have grown to be popular phrases in the modern world. Taboola was courteous enough to give us some of the most popular news articles across the world over the weekend to analyze.</p>

        <h2> Headlines </h2>

        <p> Sociological studies have shown that people are likely to only engage with the titles of articles, which is to say that the titles of articles are becoming larger factors for increasing the Click-Through Rate of your article as titles alone are often enough for people to spread the news despite not reading the rest of the content. </p>

        <p> Our team has found the most frequent words and phrases of articles across the regions. </p>

        <h3> Top Words in US Article Titles </h3>

        <p><img src="../data/title_cloud_us.png" alt="image" /></p>

        <h3> Top Words in UK Article Titles </h3>

        <p><img src="../data/title_cloud_uk.png" alt="image" /></p>

        <h3> Top Words in Australia Article Titles </h3>

        <p><img src="../data/title_cloud_aus.png" alt="image" /></p>

        <p> What is interesting to note is that despite this variance in word choice, the titles of the top articles of all these regions have similar sentiment scores. </p>

        <h3> Title Sentiment Plot </h3>

        <p><img src="../data/articleTitleCompound.png" alt="image" /></p>
      </div>
    )
  }
}

export default Blog
