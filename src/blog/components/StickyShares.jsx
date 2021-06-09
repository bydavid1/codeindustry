import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { EmailShareButton, FacebookShareButton, LinkedinShareButton, TwitterShareButton, FacebookIcon, TwitterIcon, LinkedinIcon, EmailIcon } from 'react-share';



const StickyShares = React.forwardRef((props, ref) => {
    const url = window.location.href
    return (
        <div className="post-shares sticky-shares" ref={ref}>
        <FacebookShareButton url={url} resetButtonStyle={false} className="share-facebook">
            <FontAwesomeIcon icon={["fab", "facebook"]}/>
        </FacebookShareButton>
        <TwitterShareButton url={url} resetButtonStyle={false} className="share-twitter">
            <FontAwesomeIcon icon={["fab", "twitter"]}/>
        </TwitterShareButton>
        <LinkedinShareButton url={url} resetButtonStyle={false} className="share-linkedin">
            <FontAwesomeIcon icon={["fab", "linkedin"]}/>
        </LinkedinShareButton>
        <EmailShareButton url={url} resetButtonStyle={false}>
            <FontAwesomeIcon icon={["fa", "envelope"]}/>
        </EmailShareButton>
        </div>  
    )
})

export default StickyShares;