import React, { Component } from 'react';
import api from '../api'
import adPlaceholder from '../../../storage/static/ad-1.jpg'
import Post from '../components/Post.jsx'
import Loader from '../components/Loader.jsx';
import MetaTags from 'react-meta-tags';
import { Link } from 'react-router-dom';

class Category extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category: {},
            posts: {}
        }
    }
    

    componentDidMount() {
        let slug = this.props.match.params.slug
        api.get('/posts/category/' + slug)
        .then(response => {
            this.setState({
                category: response.data.category,
                posts: response.data.posts
            })
        })

    }
    
    render() {
        return (
            <>
                <MetaTags>
                    <title>{ this.state.category.title }</title>
                    <meta name="description" content={ this.state.category.description } /> 

                    {/* og meta */}
                    <meta property="og:title" content={ this.state.category.title }  />
                    <meta property="og:description" content={ this.state.category.description } />
                    <meta property="og:image" content={ this.state.category.cover ? this.state.category.cover.url : ''}  />
                    <meta property="og:url" content={window.location.href}/>
                    <meta property="og:type" content="website"/>
                    {/* twitter meta */}
                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta property="twitter:url" content={window.location.href}/>
                    <meta name="twitter:title" content={ this.state.category.title }/>
                    <meta name="twitter:description" content={ this.state.category.description }/>
                    <meta name="twitter:image" content={ this.state.category.cover ? this.state.category.cover.url : ''}/>
                </MetaTags>
                <div className="page-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10">
                                <ul className="page-header-breadcrumb">
                                    <li><Link to="/">Inicio</Link></li>
                                    <li>Category</li>
                                </ul>
                                <h1>{this.state.category.title}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="row">
                                    {
                                    this.state.posts.length > 0 ? (
                                        this.state.posts.flatMap(post => 
                                            <div key={post._id} className="col-md-6">
                                            <Post style="thumb" title={post.title} cover={post.cover.url} date={post.date}
                                             category={this.state.category.title} postSlug={post.slug} categorySlug={this.state.category.slug}/>
                                            </div>
                                        )
                                        ) : (
                                            <Loader/>   
                                        )
                                    }
                                </div>
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
        );
    }
}

export default Category;