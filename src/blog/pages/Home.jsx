import React from 'react'
import api from '../api'
import Post from '../components/Post.jsx'

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            recents: []
        }
    }

    componentDidMount() {
        api.get('/posts/home/editorsChoice')
        .then(response => {
            this.setState({
                posts: response.data
            })
        })
        .catch(error => {
            console.error(error)
        })

        api.get('/posts/home/recent')
        .then(response => {
            this.setState({
                recents: response.data
            })
        })
        .catch(error => {
            console.error(error)
        })
    }

    render() {
        return (
            <>
                <div className="page-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10">
                                <ul className="page-header-breadcrumb">
                                    <li><a href="index.html">Home</a></li>
                                    <li>Recents</li>
                                </ul>
                                <h1>Code Industry</h1>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="section">
                     <div className="container">
                         <div className="row">
                            <div className="col-md-12">
                                 <div className="section-title">
                                     <h2>Eleccion del editor</h2>
                                 </div>
                             </div>
                            {
                                this.state.posts.length > 0 ? (
                                    this.state.posts.flatMap(post => 
                                        <div key={post._id} className="col-md-6">
                                            <Post style="thumb" title={post.title} cover={post.cover.url} date={post.date}
                                             category={post.category.title} postSlug={post.slug} categorySlug={post.category.slug}/>
                                        </div>
                                    )
                                ) : (
                                    <div className="col-md-12">
                                        <h3>No items</h3>
                                    </div>
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
                                this.state.recents.length > 0 ? (
                                    this.state.recents.flatMap(post => 
                                        <div key={post._id} className="col-md-4">
                                            <Post title={post.title} cover={post.cover.url} slug={post.slug} date={post.date}
                                             category={post.category.title}/>
                                        </div>
                                    )
                                ) : (
                                    <div className="col-md-12">
                                        <h3>No items</h3>
                                    </div>
                                )
                            }
                         </div>
                         {/* /row */}
                     </div>
                     {/* /container */}
                 </div>
                 {/* /section */}
            </>
        )
    }
}

export default Home;