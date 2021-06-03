import React from 'react'
import { withRouter } from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import api from '../api'

import adPlaceholder from '../../../storage/static/ad-1.jpg'

class Article extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      article: {}
    }
  }

  componentDidMount() {
    let slug = this.props.match.params.slug
    api.get('/posts/content/' + slug)
    .then(response => {
        this.setState({
          article: response.data
        })
    })
    .catch(error => {
        console.error(error)
    })
  }

    render() {
        return (
          <>
            <div className="page-header post-header">
              {
                this.state.article.cover ? (
                  <>
                    <div className="background-img" style={{backgroundImage: 'url(http://localhost:1337' + this.state.article.cover.url +')'}}></div>
                    <div className="container">
                      <div className="row">
                        <div className="col-md-10">
                          <div className="post-meta">
                            <a className="post-category cat-2" href="category.html">JavaScript</a>
                            <span className="post-date">{this.state.article.date}</span>
                          </div>
                          <h1>{this.state.article.title}</h1>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="spinner-grow text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                )
              }
            </div>
            <div className="section">
              <div className="container">
                <div className="row">
                  <div className="col-md-8">
                    <div className="section-row sticky-container">
                      <div className="main-post">
                      <ReactMarkdown>
                        {this.state.article.content}
                      </ReactMarkdown>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="aside-widget text-center">
                      <a href="#" style={{display: 'inline-block', margin: 'auto'}}>
                        <img className="img-responsive" src={adPlaceholder} alt=""/>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>    
        );
    }
}

export default withRouter(Article);