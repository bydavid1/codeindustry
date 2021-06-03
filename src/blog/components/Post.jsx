import React from 'react'
import { Link } from 'react-router-dom'

//Fix this
const tempDomain = 'http://localhost:1337'
const tempBlogPath = '/post/'

const Post = (props) => {
    const compactStyle = 
        <div className="post post-thumb">
            <Link className="post-img" to={tempBlogPath + props.slug}><img src={tempDomain + props.cover} alt=""/></Link>
            <div className="post-body">
                <div className="post-meta">
                    <a className="post-category cat-2" href="#">{props.category}</a>
                    <span className="post-date">{props.date}</span>
                </div>
                <h3 className="post-title"><Link to={tempBlogPath + props.slug}>{props.title}</Link></h3>
            </div>
        </div>

        const defaultStyle =                                          
            <div className="post">
                <Link className="post-img" to={tempBlogPath + props.slug}><img src={tempDomain + props.cover} alt=""/></Link>
                <div className="post-body">
                    <div className="post-meta">
                        <a className="post-category cat-4" href="#">{props.category}</a>
                        <span className="post-date">{props.date}</span>
                    </div>
                    <h3 className="post-title"><Link to={tempBlogPath + props.slug}>{props.title}</Link></h3>
                </div>
            </div>

    return props.style == 'compact' ?  compactStyle : defaultStyle;
}

export default Post;