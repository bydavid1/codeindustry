//Core
import React, { lazy, Suspense } from 'react'
//Components
import { withError } from '../components/ErrorBoundary.jsx';
import SEO from '../components/SEO.jsx'
import Loader from '../components/Loader.jsx';
import PostAuthor from '../components/PostAuthor.jsx'
import PostBody from '../components/PostBody.jsx';
import PostHeader from '../components/PostHeader.jsx';
import PageLoader from '../components/PageLoader.jsx'
const NotFound = lazy(() => import('../components/NotFound.jsx'));
//Services
import api from '../api'
//Assets
import adPlaceholder from '../../../storage/static/ad.svg'

class Article extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      status: 0
    }

    this.article = {
      cover: {},
      category: {},
      created_by: {}
    }
  }

  componentDidMount() {
    let slug = this.props.match.params.slug
    api.get(`/posts/content/${slug}`)
    .then(response => {
      this.article = response.data;
        this.setState({
          loading: false,
          status: response.status
        })
    })
    .catch(error => {
      console.log(error)
      this.setState({
        loading: false,
        status: error.response.status
      })
    })
  }

    render() {
      return (
        <>
          {
            this.state.loading === true ? (
              <Loader/>
            ) : (
              this.state.status === 200 ? (
                <>
                <SEO info={{
                  title: this.article.title,
                  description: this.article.content,
                  image: this.article.cover.url,
                  type: 'article'
                }}/>
                <div className="page-header post-header">
                  <PostHeader cover={this.article.cover.url } date={this.article.date}
                    title={this.article.title} category={this.article.category.title} categorySlug={this.article.category.slug} />
                </div>
                <div className="section">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-8">
                        <PostBody content={this.article.content} />
                        <hr />
                        <PostAuthor firstname={this.article.created_by.firstname}
                          lastname={this.article.created_by.lastname} />
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
                <Suspense fallback={<PageLoader/>}>
                  <NotFound/>
                </Suspense>
              )
            )
          }
        </>
      )
    }
}

export default withError(Article);