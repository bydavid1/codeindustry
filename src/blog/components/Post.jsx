import React from 'react'

const Post = (props) => {
    return (
        <div className="col-md-6">
            <div className="post post-thumb">
                <a className="post-img" href="blog-post.html"><img src={props.cover} alt=""/></a>
                <div className="post-body">
                    <div className="post-meta">
                        <a className="post-category cat-2" href="#">{props.category}</a>
                        <span className="post-date">{props.datePublishied}</span>
                    </div>
                    <h3 className="post-title"><a href="blog-post.html">{props.title}</a></h3>
                </div>
            </div>
        </div>
    )
}

export default Post;