import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EmailShareButton, FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';
import { Link } from 'react-router-dom'
import logo from '../../../storage/static/logo.png'

const Footer = () => {
  const url = window.location.href
    return (
        <footer id="footer">
        {/* container */}
        <div className="container">
          {/* row */}
          <div className="row">
            <div className="col-md-4">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="index.html" className="logo"><img src={logo} alt="" /></a>
                </div>
                <ul className="footer-nav">
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Advertisement</a></li>
                </ul>
                <div className="footer-copyright">
                  <span>© 
                    Copyright © All rights reserved
                    </span>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="row">
                <div className="col-md-6">
                  <div className="footer-widget">
                    <h3 className="footer-title">Menu</h3>
                    <ul className="footer-links">
                    <li>
                      <Link to="/">Inicio</Link>
                    </li>
                    <li>
                      <Link to="/about">Información</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contacto</Link>
                    </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="footer-widget">
                    <h3 className="footer-title">Catagories</h3>
                    <ul className="footer-links">
                      {/* <li><a href="category.html">Web Design</a></li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-widget">
                <h3 className="footer-title">Haz que nos conozcan</h3>
                <ul className="footer-social">
                  <li>
                    <FacebookShareButton url={url} resetButtonStyle={false}>
                        <FontAwesomeIcon icon={["fab", "facebook"]}/>
                    </FacebookShareButton>
                  </li>
                  <li>
                    <TwitterShareButton url={url} resetButtonStyle={false}>
                        <FontAwesomeIcon icon={["fab", "twitter"]}/>
                    </TwitterShareButton>
                  </li>
                  <li>        
                    <LinkedinShareButton url={url} resetButtonStyle={false}>
                        <FontAwesomeIcon icon={["fab", "linkedin"]}/>
                    </LinkedinShareButton></li>
                  <li>        
                    <EmailShareButton url={url} resetButtonStyle={false}>
                        <FontAwesomeIcon icon={["fa", "envelope"]}/>
                    </EmailShareButton></li>
                </ul>
              </div>
            </div>
          </div>
          {/* /row */}
        </div>
        {/* /container */}
      </footer>
    )
}

export default Footer;