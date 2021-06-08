import React from 'react'
import { Link } from 'react-router-dom'

//Fix this
const tempDomain = 'http://localhost:1337'

const Post = (props) => {
    const thumb = 
        <div className="post post-thumb">
            <Link className="post-img" to={'/post/' + props.postSlug}><img src={tempDomain + props.cover} alt=""/></Link>
            <div className="post-body">
                <div className="post-meta">
                    <Link className="post-category cat-2" to={'/category/' + props.categorySlug}>{props.category}</Link>
                    <span className="post-date">{props.date}</span>
                </div>
                <h3 className="post-title"><Link to={'/post/' + props.postSlug}>{props.title}</Link></h3>
            </div>
        </div>

    const widget = 
        <div className="post post-widget">
            <a className="post-img" href="blog-post.html"><img src={props.cover}
                    alt="" /></a>
            <div className="post-body">
                <h3 className="post-title"><a href="#">{props.title}</a></h3>
            </div>
        </div>

    const def =                                          
        <div className="post">
            <Link className="post-img" to={'/post/' + props.postSlug}><img src={tempDomain + props.cover} alt=""/></Link>
            <div className="post-body">
                <div className="post-meta">
                    <Link className="post-category cat-2" to={'/category/' + props.categorySlug}>{props.category}</Link>
                    <span className="post-date">{props.date}</span>
                </div>
                <h3 className="post-title"><Link to={'/post/' + props.postSlug}>{props.title}</Link></h3>
            </div>
        </div>

        switch (props.style) {
            case 'thumb':
                return thumb 
            case 'widget':
                return widget
            default:
                return def
        }
}

export default Post;