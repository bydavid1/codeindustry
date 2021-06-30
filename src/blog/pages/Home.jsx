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
            loading: true
        }

        this.home = {
            info: {},
            ids: {
                editorsPick: [],
                recents: [],
            },
            posts: []
        }
    }

    componentDidMount() {
        api.get('/posts/home')
        .then(response => {

            this.home = {
                ids: {
                    editorsPick: response.data.ids.editorsPick,
                    recents: response.data.ids.recents,
                },
                posts: response.data.posts,
            }

            this.setState({
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
                    <title>{ this.home.title }</title>
                    <meta name="description" content={ this.home.extract } /> 

                    {/* og meta */}
                    <meta property="og:title" content={ this.home.title }  />
                    <meta property="og:description" content={ this.home.extract } />
                    <meta property="og:image" content={ this.home.image ? this.home.image.url : ''}  />
                    <meta property="og:url" content={this.home.url}/>
                    <meta property="og:type" content={this.home.website}/>
                    {/* twitter meta */}
                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta property="twitter:url" content={this.home.url}/>
                    <meta name="twitter:title" content={ this.home.title }/>
                    <meta name="twitter:description" content={ this.home.extract }/>
                    <meta name="twitter:image" content={ this.home.image ? this.home.image.url : ''}/>
                </MetaTags>
                <div className="page-header">
                    <div className="container-xl">
                        <div className="row">
                            <div className="col-md-10">
                                <ul className="page-header-breadcrumb">
                                    <li><Link to="/">{this.home.title}</Link></li>
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
                                    this.home.ids.editorsPick.length > 0 ? (
                                        //iterating in editorsPick ids
                                        this.home.ids.editorsPick.map(id => {
                                            for (const property in this.home.posts) {
                                                const currentObject = this.home.posts[property]
                                                //Validating if property contains object and _id property exist
                                                if (String(id) === String(currentObject._id)) {
                                                    return (
                                                        <div key={currentObject._id} className="col-md-4 col-sm-6">
                                                            <Post style="thumb" 
                                                                title={currentObject.title} 
                                                                cover={currentObject.cover.url} 
                                                                date={currentObject.date}
                                                                category={currentObject.category.title} 
                                                                postSlug={currentObject.slug} 
                                                                categorySlug={currentObject.category.slug}/>
                                                        </div>
                                                    )
                                                }
                                            }
                                        })
                                    ) : (
                                        <h6>No hay posts disponibles</h6> 
                                    )
                                )
                            }
                         </div>

                        {/* Recent posts */}

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
                                    this.home.ids.recents.length > 0 ? (
                                        //iterating in editorsPick ids
                                        this.home.ids.recents.map(id => {
                                            for (const property in this.home.posts) {
                                                const currentObject = this.home.posts[property]
                                                //Validating if property contains object and _id property exist
                                                if (String(id) === String(currentObject._id)) {
                                                    return (
                                                        <div key={currentObject._id} className="col-md-4 col-sm-6">
                                                            <Post title={currentObject.title} 
                                                                cover={currentObject.cover.url} 
                                                                date={currentObject.date}
                                                                category={currentObject.category.title} 
                                                                postSlug={currentObject.slug} 
                                                                categorySlug={currentObject.category.slug}/>
                                                        </div>
                                                    )
                                                }
                                            }
                                        })
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