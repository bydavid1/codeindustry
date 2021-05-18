import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import account from '../../storage/images/account.jpg'

const Header = function(props) {
    return (
        <header className="header">
            <div className="container clearfix">
                <img className="profile-image img-fluid float-start rounded-circle" src={account}
                    alt="profile image" />
                <div className="profile-content float-start">
                    <h1 className="name">{props.account.fullName}</h1>
                    <h2 className="desc">{props.account.grade}</h2>
                    <ul className="social list-inline">
                        {
                            props.account.facebook && 
                                <li className="list-inline-item">
                                    <a href={props.account.facebook}>
                                        <FontAwesomeIcon icon={["fab", "facebook"]}/>
                                    </a>
                                </li>
                        }
                        {
                            props.account.twitter && 
                                <li className="list-inline-item">
                                    <a href={props.account.twitter}>
                                        <FontAwesomeIcon icon={["fab", "twitter"]}/>
                                    </a>
                                </li>
                        }
                        {
                            props.account.linkedin && 
                                <li className="list-inline-item">
                                    <a href={props.account.linkedin}>
                                        <FontAwesomeIcon icon={["fab", "linkedin"]}/>
                                    </a>
                                </li>
                        }
                        {
                            props.account.github && 
                                <li className="list-inline-item">
                                    <a href={props.account.github}>
                                        <FontAwesomeIcon icon={["fab", "github"]}/>
                                    </a>
                                </li>
                        }
                        {
                            props.account.stackoverflow && 
                                <li className="list-inline-item">
                                    <a href={props.account.stackoverflow}>
                                        <FontAwesomeIcon icon={["fab", "stack-overflow"]}/>
                                    </a>
                                </li>
                        }
                        {
                            props.account.codepen && 
                                <li className="list-inline-item last-item">
                                    <a href={props.account.codepen}>
                                        <FontAwesomeIcon icon={["fab", "codepen"]}/>
                                    </a>
                                </li>
                        }
                    </ul>
                    <h6><i className="fa fa-exclamation-circle mr-1"></i>Building Portfolio</h6>
                </div>
    
                <a className="btn btn-success float-end" href="/curriculum" target="_blank">
                    <FontAwesomeIcon icon="download"/> Descargar CV</a>
    
            </div>
        </header>
    )
}

export default Header;