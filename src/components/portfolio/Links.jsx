import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Links = function(props) {
    return (
        <ul className="social list-inline">
            {
                props.links.facebook && 
                    <li className="list-inline-item">
                        <a href={props.links.facebook}>
                            <FontAwesomeIcon icon={["fab", "facebook"]}/>
                        </a>
                    </li>
            }
            {
                props.links.twitter && 
                    <li className="list-inline-item">
                        <a href={props.links.twitter}>
                            <FontAwesomeIcon icon={["fab", "twitter"]}/>
                        </a>
                    </li>
            }
            {
                props.links.linkedin && 
                    <li className="list-inline-item">
                        <a href={props.links.linkedin}>
                            <FontAwesomeIcon icon={["fab", "linkedin"]}/>
                        </a>
                    </li>
            }
            {
                props.links.github && 
                    <li className="list-inline-item">
                        <a href={props.links.github}>
                            <FontAwesomeIcon icon={["fab", "github"]}/>
                        </a>
                    </li>
            }
            {
                props.links.stackoverflow && 
                    <li className="list-inline-item">
                        <a href={props.links.stackoverflow}>
                            <FontAwesomeIcon icon={["fab", "stack-overflow"]}/>
                        </a>
                    </li>
            }
            {
                props.links.codepen && 
                    <li className="list-inline-item last-item">
                        <a href={props.links.codepen}>
                            <FontAwesomeIcon icon={["fab", "codepen"]}/>
                        </a>
                    </li>
            }
        </ul>
    )
}

export default Links;