import React from 'react'

const PostWidget = (props) => {
    return (
        <div className="post post-widget">
            <a className="post-img" href="blog-post.html"><img src={props.cover}
                    alt="" /></a>
            <div className="post-body">
                <h3 className="post-title"><a href="#">{props.title}</a></h3>
            </div>
        </div>
    )
}

export default PostWidget;