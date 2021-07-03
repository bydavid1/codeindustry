import React from 'react'
import avatar from '../../storage/static/avatar.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PostAuthor = (props) => {
    return (
        <div className="post-author">
            <div className="media">
                <div className="media-left">
                    <img className="media-object" src={avatar} alt="" />
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        <h4>{`${props.firstname} ${props.lastname}`}</h4>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <ul className="author-social">
                        <li><a href="#"><FontAwesomeIcon icon={["fab", "facebook"]}/></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={["fab", "twitter"]}/></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={["fab", "github"]}/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PostAuthor;