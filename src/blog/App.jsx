import React from 'react';

function App() {
    return (
        <div className="col-md-6">
        <div className="post post-thumb">
            <a className="post-img" href="blog-post.html"><img src="./storage/static/post-1.jpg"
                    alt="" /></a>
            <div className="post-body">
                <div className="post-meta">
                    <a className="post-category cat-2" href="category.html">JavaScript</a>
                    <span className="post-date">March 27, 2018</span>
                </div>
                <h3 className="post-title"><a href="blog-post.html">Chrome Extension Protects
                        Against JavaScript-Based CPU Side-Channel Attacks</a></h3>
            </div>
        </div>
    </div>
    )
}

export default App;