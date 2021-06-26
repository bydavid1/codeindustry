import React from 'react'
import api from '../api'
import Post from '../components/Post.jsx'
import Loader from '../components/Loader.jsx';
import MetaTags from 'react-meta-tags';
import { Link } from 'react-router-dom';

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            home: {
                editorsChoice: [],
                recents: []
            },
            loading: true
        }
    }

    componentDidMount() {
        api.get('/posts/home')
        .then(response => {
            this.setState({
                home: response.data,
                loading: false
            })
        })
        .catch(error => {
            this.setState({
                loading: false
            })
        })
    }

    render() {
        return (
            <>
                <MetaTags>
                    <title>{ this.state.home.title }</title>
                    <meta name="description" content={ this.state.home.extract } /> 

                    {/* og meta */}
                    <meta property="og:title" content={ this.state.home.title }  />
                    <meta property="og:description" content={ this.state.home.extract } />
                    <meta property="og:image" content={ this.state.home.image ? this.state.home.image.url : ''}  />
                    <meta property="og:url" content={this.state.home.url}/>
                    <meta property="og:type" content={this.state.home.website}/>
                    {/* twitter meta */}
                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta property="twitter:url" content={this.state.home.url}/>
                    <meta name="twitter:title" content={ this.state.home.title }/>
                    <meta name="twitter:description" content={ this.state.home.extract }/>
                    <meta name="twitter:image" content={ this.state.home.image ? this.state.home.image.url : ''}/>
                </MetaTags>
                <div className="page-header">
                    <div className="container-xl">
                        <div className="row">
                            <div className="col-md-10">
                                <ul className="page-header-breadcrumb">
                                    <li><Link to="/">{this.state.home.title}</Link></li>
                                </ul>
                                <h1>Code Industry</h1>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="section">
                     <div className="container-xl">
                         <div className="row">
                            <div className="col-md-12">
                                 <div className="section-title">
                                     <h2>Eleccion del editor</h2>
                                 </div>
                             </div>
                            {
                                this.state.loading === true ? (
                                    <Loader/> 
                                ) : (
                                    this.state.home.editorsChoice.length > 0 ? (
                                        this.state.home.editorsChoice.flatMap(post => 
                                            <div key={post._id} className="col-md-4 col-sm-6">
                                                <Post style="thumb" title={post.title} cover={post.cover.url} date={post.date}
                                                 category={post.category.title} postSlug={post.slug} categorySlug={post.category.slug}/>
                                            </div>
                                        )
                                    ) : (
                                        <h6>No hay posts disponibles</h6> 
                                    )
                                )
                            }
                         </div>

                         <div className="row">
                             <div className="col-md-12">
                                 <div className="section-title">
                                     <h2>Recientes</h2>
                                 </div>
                             </div>
                             {
                                this.state.loading === true ? (
                                    <Loader/> 
                                ) : (
                                    this.state.home.recents.length > 0 ? (
                                        this.state.home.recents.flatMap(post => 
                                            <div key={post._id} className="col-md-4 col-sm-6">
                                                <Post title={post.title} cover={post.cover.url} slug={post.slug} date={post.date}
                                                 category={post.category.title} postSlug={post.slug} categorySlug={post.category.slug}/>
                                            </div>
                                        )
                                    ) : (
                                        <h6>No hay posts disponibles</h6> 
                                    )
                                )
                            }
                         </div>
                     </div>
                 </div>
            </>
        )
    }
}

export default Home;