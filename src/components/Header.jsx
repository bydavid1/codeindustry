import React from 'react';

const Header = function() {
    return (
        <header className="header">
            <div className="container clearfix">
                <img className="profile-image img-fluid float-left rounded-circle" src="assets/images/account.jpg"
                    alt="profile image" />
                <div className="profile-content float-left">
                    <h1 className="name">Byron Jimenez</h1>
                    <h2 className="desc">Web App Developer</h2>
                    <ul className="social list-inline">
                        <li className="list-inline-item"><a href="https://www.linkedin.com/in/bydavid/"><i
                                    className="fab fa-linkedin-in"></i></a></li>
                        <li className="list-inline-item"><a href="https://github.com/bydavid1"><i
                                    className="fab fa-github-alt"></i></a></li>
                        <li className="list-inline-item"><a href="https://es.stackoverflow.com/users/142564/byron-jimenez"><i
                                    className="fab fa-stack-overflow"></i></a></li>
                        <li className="list-inline-item last-item"><a href="#"><i className="fab fa-codepen"></i></a></li>
                    </ul>
                    <h6><i className="fa fa-exclamation-circle mr-1"></i>Building Portfolio</h6>
                </div>
    
                <a className="btn btn-success float-right" href="assets/documents/CVSpanish.pdf" target="_blank"><i
                        className="fas fa-download"></i> Descargar CV</a>
    
            </div>
        </header>
    )
}

export default Header;