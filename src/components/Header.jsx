import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import account from '../../storage/images/account.jpg'

const Header = function() {
    return (
        <header className="header">
            <div className="container clearfix">
                <img className="profile-image img-fluid float-start rounded-circle" src={account}
                    alt="profile image" />
                <div className="profile-content float-start">
                    <h1 className="name">Byron Jimenez</h1>
                    <h2 className="desc">Web App Developer</h2>
                    <ul className="social list-inline">
                        <li className="list-inline-item">
                            <a href="https://www.linkedin.com/in/bydavid/">
                                <FontAwesomeIcon icon={["fab", "linkedin"]}/>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://github.com/bydavid1">
                                <FontAwesomeIcon icon={["fab", "github"]}/>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://es.stackoverflow.com/users/142564/byron-jimenez">
                                <FontAwesomeIcon icon={["fab", "stack-overflow"]}/>
                            </a>
                         </li>
                        <li className="list-inline-item last-item">
                            <a href="#">
                                <FontAwesomeIcon icon={["fab", "codepen"]}/>
                            </a>
                        </li>
                    </ul>
                    <h6><i className="fa fa-exclamation-circle mr-1"></i>Building Portfolio</h6>
                </div>
    
                <a className="btn btn-success float-end" href="assets/documents/CVSpanish.pdf" target="_blank">
                    <FontAwesomeIcon icon="download"/> Descargar CV</a>
    
            </div>
        </header>
    )
}

export default Header;