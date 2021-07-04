import React from  'react'
import { Link } from 'react-router-dom'

const PostHeader = (props) => {
    return (
        <>
            <div className="background-img" style={{backgroundImage: `url('${props.cover}')`}}></div>
            <div className="container">
                <div className="row">
                <div className="col-md-10">
                    <div className="post-meta">
                    <Link className="post-category cat-2" to={'/category/' + props.categorySlug}>{props.category}</Link>
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