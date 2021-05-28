import React from 'react'

//Fix this
const tempDomain = 'http://localhost:1337'
const tempBlogPath = '/post/'

const Post = (props) => {
    const compactStyle = 
        <div className="post post-thumb">
            <a className="post-img" href={props.slug}><img src={tempDomain + props.cover} alt=""/></a>
            <div className="post-body">
                <div className="post-meta">
                    <a className="post-category cat-2" href="#">{props.category}</a>
                    <span className="post-date">{props.date}</span>
                </div>
                <h3 className="post-title"><a href={ tempBlogPath + props.slug}>{props.title}</a></h3>
            </div>
        </div>

        const defaultStyle =                                          
            <div className="post">
                <a className="post-img" href={props.slug}><img src={tempDomain + props.cover}
                        alt="" /></a>
                <div className="post-body">
                    <div className="post-meta">
                        <a className="post-category cat-4" href="#">{props.category}</a>
                        <span className="post-date">{props.date}</span>
                    </div>
                    <h3 className="post-title"><a href={props.slug}>{props.title}</a></h3>
                </div>
            </div>

    return props.style == 'compact' ?  compactStyle : defaultStyle;
}

export default Post;