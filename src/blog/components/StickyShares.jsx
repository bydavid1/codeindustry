import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StickyShares = () => {
    return (
        <div class="post-shares sticky-shares">
            <a href="#" class="share-button"><FontAwesomeIcon icon={["fa", "share"]}/></a>
            <a href="#" class="share-facebook"><FontAwesomeIcon icon={["fab", "facebook"]}/></a>
            <a href="#" class="share-twitter"><FontAwesomeIcon icon={["fab", "twitter"]}/></a>
            <a href="#" class="share-linkedin"><FontAwesomeIcon icon={["fab", "linkedin"]}/></a>
            <a href="#"><FontAwesomeIcon icon={["fa", "envelope"]}/></a>
        </div>
    )
}

export default StickyShares;