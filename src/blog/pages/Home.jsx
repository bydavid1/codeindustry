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
                                            <Post style="compact" title={post.title} cover={post.cover.url} slug={post.slug} date={post.date}
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
                         {/* row */}
                         <div className="row">
                             <div className="col-md-8">
                                 <div className="row">
                                     {/* post */}
                                     <div className="col-md-12">
                                         <div className="post post-thumb">
                                             <a className="post-img" href="blog-post.html"><img src="./storage/static/post-2.jpg"
                                                     alt="" /></a>
                                             <div className="post-body">
                                                 <div className="post-meta">
                                                     <a className="post-category cat-3" href="category.html">Jquery</a>
                                                     <span className="post-date">March 27, 2018</span>
                                                 </div>
                                                 <h3 className="post-title"><a href="blog-post.html">Ask HN: Does
                                                         Anybody Still Use JQuery?</a></h3>
                                             </div>
                                         </div>
                                     </div>
                                     {/* /post */}
                                     {/* post */}
                                     <div className="col-md-6">
                                         <div className="post">
                                             <a className="post-img" href="blog-post.html"><img src="./storage/static/post-1.jpg"
                                                     alt="" /></a>
                                             <div className="post-body">
                                                 <div className="post-meta">
                                                     <a className="post-category cat-4" href="category.html">Css</a>
                                                     <span className="post-date">March 27, 2018</span>
                                                 </div>
                                                 <h3 className="post-title"><a href="blog-post.html">CSS Float: A
                                                         Tutorial</a></h3>
                                             </div>
                                         </div>
                                     </div>
                                     {/* /post */}
                                     {/* post */}
                                     <div className="col-md-6">
                                         <div className="post">
                                             <a className="post-img" href="blog-post.html"><img src="./storage/static/post-2.jpg"
                                                     alt="" /></a>
                                             <div className="post-body">
                                                 <div className="post-meta">
                                                     <a className="post-category cat-1" href="category.html">Web
                                                         Design</a>
                                                     <span className="post-date">March 27, 2018</span>
                                                 </div>
                                                 <h3 className="post-title"><a href="blog-post.html">Tell-A-Tool: Guide
                                                         To Web Design And Development Tools</a></h3>
                                             </div>
                                         </div>
                                     </div>
                                     {/* /post */}
                                     <div className="clearfix visible-md visible-lg" />
                                     {/* post */}
                                     <div className="col-md-6">
                                         <div className="post">
                                             <a className="post-img" href="blog-post.html"><img src="./storage/static/post-4.jpg"
                                                     alt="" /></a>
                                             <div className="post-body">
                                                 <div className="post-meta">
                                                     <a className="post-category cat-2"
                                                         href="category.html">JavaScript</a>
                                                     <span className="post-date">March 27, 2018</span>
                                                 </div>
                                                 <h3 className="post-title"><a href="blog-post.html">Chrome Extension
                                                         Protects Against JavaScript-Based CPU Side-Channel Attacks</a>
                                                 </h3>
                                             </div>
                                         </div>
                                     </div>
                                     {/* /post */}
                                     {/* post */}
                                     <div className="col-md-6">
                                         <div className="post">
                                             <a className="post-img" href="blog-post.html"><img src="./storage/static/post-5.jpg"
                                                     alt="" /></a>
                                             <div className="post-body">
                                                 <div className="post-meta">
                                                     <a className="post-category cat-3" href="category.html">Jquery</a>
                                                     <span className="post-date">March 27, 2018</span>
                                                 </div>
                                                 <h3 className="post-title"><a href="blog-post.html">Ask HN: Does
                                                         Anybody Still Use JQuery?</a></h3>
                                             </div>
                                         </div>
                                     </div>
                                     {/* /post */}
                                     <div className="clearfix visible-md visible-lg" />
                                     {/* post */}
                                     <div className="col-md-6">
                                         <div className="post">
                                             <a className="post-img" href="blog-post.html"><img src="./storage/static/post-3.jpg"
                                                     alt="" /></a>
                                             <div className="post-body">
                                                 <div className="post-meta">
                                                     <a className="post-category cat-1" href="category.html">Web
                                                         Design</a>
                                                     <span className="post-date">March 27, 2018</span>
                                                 </div>
                                                 <h3 className="post-title"><a href="blog-post.html">Pagedraw UI Builder
                                                         Turns Your Website Design Mockup Into Code Automatically</a>
                                                 </h3>
                                             </div>
                                         </div>
                                     </div>
                                     {/* /post */}
                                     {/* post */}
                                     <div className="col-md-6">
                                         <div className="post">
                                             <a className="post-img" href="blog-post.html"><img src="./storage/static/post-4.jpg"
                                                     alt="" /></a>
                                             <div className="post-body">
                                                 <div className="post-meta">
                                                     <a className="post-category cat-2"
                                                         href="category.html">JavaScript</a>
                                                     <span className="post-date">March 27, 2018</span>
                                                 </div>
                                                 <h3 className="post-title"><a href="blog-post.html">Chrome Extension
                                                         Protects Against JavaScript-Based CPU Side-Channel Attacks</a>
                                                 </h3>
                                             </div>
                                         </div>
                                     </div>
                                     {/* /post */}
                                 </div>
                             </div>
                             <div className="col-md-4">
                                 {/* post widget */}
                                 <div className="aside-widget">
                                     <div className="section-title">
                                         <h2>Most Read</h2>
                                     </div>
                                     <div className="post post-widget">
                                         <a className="post-img" href="blog-post.html"><img src="./storage/static/widget-1.jpg"
                                                 alt="" /></a>
                                         <div className="post-body">
                                             <h3 className="post-title"><a href="blog-post.html">Tell-A-Tool: Guide To
                                                     Web Design And Development Tools</a></h3>
                                         </div>
                                     </div>
                                     <div className="post post-widget">
                                         <a className="post-img" href="blog-post.html"><img src="./storage/static/widget-2.jpg"
                                                 alt="" /></a>
                                         <div className="post-body">
                                             <h3 className="post-title"><a href="blog-post.html">Pagedraw UI Builder
                                                     Turns Your Website Design Mockup Into Code Automatically</a></h3>
                                         </div>
                                     </div>
                                     <div className="post post-widget">
                                         <a className="post-img" href="blog-post.html"><img src="./storage/static/widget-3.jpg"
                                                 alt="" /></a>
                                         <div className="post-body">
                                             <h3 className="post-title"><a href="blog-post.html">Why Node.js Is The
                                                     Coolest Kid On The Backend Development Block!</a></h3>
                                         </div>
                                     </div>
                                     <div className="post post-widget">
                                         <a className="post-img" href="blog-post.html"><img src="./storage/static/widget-4.jpg"
                                                 alt="" /></a>
                                         <div className="post-body">
                                             <h3 className="post-title"><a href="blog-post.html">Tell-A-Tool: Guide To
                                                     Web Design And Development Tools</a></h3>
                                         </div>
                                     </div>
                                 </div>
                                 {/* /post widget */}
                                 {/* post widget */}
                                 <div className="aside-widget">
                                     <div className="section-title">
                                         <h2>Featured Posts</h2>
                                     </div>
                                     <div className="post post-thumb">
                                         <a className="post-img" href="blog-post.html"><img src="./storage/static/post-2.jpg"
                                                 alt="" /></a>
                                         <div className="post-body">
                                             <div className="post-meta">
                                                 <a className="post-category cat-3" href="category.html">Jquery</a>
                                                 <span className="post-date">March 27, 2018</span>
                                             </div>
                                             <h3 className="post-title"><a href="blog-post.html">Ask HN: Does Anybody
                                                     Still Use JQuery?</a></h3>
                                         </div>
                                     </div>
                                     <div className="post post-thumb">
                                         <a className="post-img" href="blog-post.html"><img src="./storage/static/post-1.jpg"
                                                 alt="" /></a>
                                         <div className="post-body">
                                             <div className="post-meta">
                                                 <a className="post-category cat-2" href="category.html">JavaScript</a>
                                                 <span className="post-date">March 27, 2018</span>
                                             </div>
                                             <h3 className="post-title"><a href="blog-post.html">Chrome Extension
                                                     Protects Against JavaScript-Based CPU Side-Channel Attacks</a></h3>
                                         </div>
                                     </div>
                                 </div>
                                 {/* /post widget */}
                                 {/* ad */}
                                 <div className="aside-widget text-center">
                                     <a href="#" style={{display: 'inline-block', margin: 'auto'}}>
                                         <img className="img-responsive" src="./storage/static/ad-1.jpg" alt="" />
                                     </a>
                                 </div>
                                 {/* /ad */}
                             </div>
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