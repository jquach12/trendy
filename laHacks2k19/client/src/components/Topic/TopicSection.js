import React, { Component } from 'react'
import Panel from '../Panel/Panel';
import './styles.css';

export class TopicSection extends Component {
  constructor(props)
  {
    super(props);

    this.state = { 
      articles: [['Trump cuts all direct assistance to Honduras, El Salvador, Guatemala', "https://www.msn.com/en-us/news/world/trump-cuts-all-direct-assistance-to-honduras-el-salvador-guatemala/ar-BBVpDf5"], ["Trump and GOP target ‘pencil-neck’ Adam Schiff as their post-Mueller villain", "https://www.msn.com/en-us/news/politics/trump-and-gop-target-pencil-neck-adam-schiff-as-their-post-mueller-villain/ar-BBVpeK0"], ["QAnon conspiracy theorists increase their presence at Trump rallies" , "https://www.msnbc.com/the-last-word/watch/qanon-conspiracy-theorists-increase-their-presence-at-trump-rallies-1468233283703"],["Five Key Takeaways from Barr’s Letter to Congress on What’s Next for the Mueller Report", "https://www.msn.com/en-us/news/politics/five-key-takeaways-from-barrs-letter-to-congress-on-whats-next-for-the-mueller-report/ar-BBVp1lM"],["Trump and GOP target ‘pencil-neck’ Adam Schiff as their post-Mueller villain","https://www.msn.com/en-us/news/politics/trump-and-gop-target-pencil-neck-adam-schiff-as-their-post-mueller-villain/ar-BBVpeK0"],["This Footnote to Barr’s Mueller Report Letter Felt Very Random. Perhaps It Wasn’t.","https://slate.com/news-and-politics/2019/03/barr-letter-mueller-report-footnote-russia-coordination.html"]]
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
