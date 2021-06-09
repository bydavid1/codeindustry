import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer id="footer">
        {/* container */}
        <div className="container">
          {/* row */}
          <div className="row">
            <div className="col-md-5">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="index.html" className="logo"><img src="./img/logo.png" alt="" /></a>
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
            <div className="col-md-4">
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
                <h3 className="footer-title">Join our Newsletter</h3>
                <div className="footer-newsletter">
                  <form>
                    <input className="form-control" type="email" name="newsletter" placeholder="Enter your email" />
                    <button className="newsletter-btn"><i className="fa fa-paper-plane" /></button>
                  </form>
                </div>
                <ul className="footer-social">
                  <li><a href="#"><i className="fa fa-facebook" /></a></li>
                  <li><a href="#"><i className="fa fa-twitter" /></a></li>
                  <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                  <li><a href="#"><i className="fa fa-pinterest" /></a></li>
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