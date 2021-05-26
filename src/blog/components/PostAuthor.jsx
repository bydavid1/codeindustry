import React from 'react'

const PostAuthor = () => {
    return (
        <div className="post-author">
            <div className="media">
                <div className="media-left">
                    <img className="media-object" src="./img/author.png" alt="" />
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        <h3>John Doe</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <ul className="author-social">
                        <li><a href="#"><i className="fa fa-facebook" /></a></li>
                        <li><a href="#"><i className="fa fa-twitter" /></a></li>
                        <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                        <li><a href="#"><i className="fa fa-instagram" /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PostAuthor;