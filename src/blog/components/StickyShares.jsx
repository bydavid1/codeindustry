import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const StickyShares = React.forwardRef((props, ref) => (
    <div className="post-shares sticky-shares" ref={ref}>
        <a href="#" className="share-button"><FontAwesomeIcon icon={["fa", "share"]}/></a>
        <a href="#" className="share-facebook"><FontAwesomeIcon icon={["fab", "facebook"]}/></a>
        <a href="#" className="share-twitter"><FontAwesomeIcon icon={["fab", "twitter"]}/></a>
        <a href="#" className="share-linkedin"><FontAwesomeIcon icon={["fab", "linkedin"]}/></a>
        <a href="#"><FontAwesomeIcon icon={["fa", "envelope"]}/></a>
    </div>    
))

export default StickyShares;