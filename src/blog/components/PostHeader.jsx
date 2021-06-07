import React from  'react'

const PostHeader = (props) => {
    return (
        <>
            <div className="background-img" style={{backgroundImage: 'url(http://localhost:1337' + props.cover +')'}}></div>
            <div className="container">
                <div className="row">
                <div className="col-md-10">
                    <div className="post-meta">
                    <a className="post-category cat-2" href="category.html">JavaScript</a>
                    <span className="post-date">{props.date}</span>
                    </div>
                    <h1>{props.title}</h1>
                </div>
                </div>
            </div>
        </>
    )
}

export default PostHeader;