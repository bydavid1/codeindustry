import React from 'react'
import { withRouter } from "react-router-dom";
import api from '../api'
import adPlaceholder from '../../../storage/static/ad-1.jpg'
import PostAuthor from '../components/PostAuthor.jsx'
import PostBody from '../components/PostBody.jsx';
import PostHeader from '../components/PostHeader.jsx';
import Loader from '../components/Loader.jsx';

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
                    <PostHeader cover={this.state.article.cover.url} date={this.state.article.date}
                      title={this.state.article.title}/>
                  </>
                ) : (
                    <Loader/>
                )
              }
            </div>
            <div className="section">
              <div className="container">
                <div className="row">
                  <div className="col-md-8">
                    <PostBody content={this.state.article.content}/>
                    <hr/>
                    <PostAuthor/>
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