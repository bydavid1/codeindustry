import React from 'react'
import { withRouter } from "react-router-dom";
import api from '../api'
import adPlaceholder from '../../../storage/static/ad-1.jpg'
import PostAuthor from '../components/PostAuthor.jsx'
import PostBody from '../components/PostBody.jsx';
import PostHeader from '../components/PostHeader.jsx';
import Loader from '../components/Loader.jsx';
import MetaTags from 'react-meta-tags';

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
            <MetaTags>
              <title>{ this.state.article.title }</title>
              <meta name="description" content={ this.state.article.content ? this.state.article.content.slice(0, 150) : ''  } /> 

              {/* og meta */}
              <meta property="og:title" content={ this.state.article.title }  />
              <meta property="og:description" content={ this.state.article.content ? this.state.article.content.slice(0, 150) : '' } />
              <meta property="og:image" content={ this.state.article.cover ? this.state.article.cover.url : ''}  />
              <meta property="og:url" content={window.location.href}/>
              <meta property="og:type" content="article"/>
              {/* twitter meta */}
              <meta name="twitter:card" content="summary_large_image"/>
              <meta property="twitter:url" content={window.location.href}/>
              <meta name="twitter:title" content={ this.state.article.title }/>
              <meta name="twitter:description" content={ this.state.article.content ? this.state.article.content.slice(0, 150) : ''  }/>
              <meta name="twitter:image" content={ this.state.article.cover ? this.state.article.cover.url : ''}/>
            </MetaTags>
            {
              Object.keys(this.state.article).length > 0 ? (
                <>
                  <div className="page-header post-header">
                    <PostHeader cover={this.state.article.cover.url} date={this.state.article.date}
                      title={this.state.article.title} category={this.state.article.category.title} categorySlug={this.state.article.category.slug} />
                  </div>
                  <div className="section">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-8">
                          <PostBody content={this.state.article.content} />
                          <hr />
                          <PostAuthor firstname={this.state.article.admin_user.firstname}
                            lastname={this.state.article.admin_user.lastname} />
                        </div>
                        <div className="col-md-4">
                          <div className="aside-widget text-center">
                            <a href="#" style={{display: 'inline-block', margin: 'auto'}}>
                              <img className="img-responsive" src={adPlaceholder} alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                  <Loader/>
              )
            }
          </>    
        );
    }
}

export default withRouter(Article);