import React from 'react'

const Comment = () => {
    return (
        <div className="media">
            <div className="media-left">
                <img className="media-object" src="./img/avatar.png" alt="" />
            </div>
            <div className="media-body">
                <div className="media-heading">
                    <h4>John Doe</h4>
                    <span className="time">March 27, 2018 at 8:00 am</span>
                    <a href="#" className="reply">Reply</a>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.</p>
                {/* comment */}
                <div className="media">
                    <div className="media-left">
                        <img className="media-object" src="./img/avatar.png" alt="" />
                    </div>
                    <div className="media-body">
                        <div className="media-heading">
                            <h4>John Doe</h4>
                            <span className="time">March 27, 2018 at 8:00 am</span>
                            <a href="#" className="reply">Reply</a>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                {/* /comment */}
            </div>
        </div>
    )
}

export default Comment;