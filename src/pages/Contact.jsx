import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Contact extends Component {
    render() {
        return (
            <>
                <div className="page-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10">
                                <ul className="page-header-breadcrumb">
                                    <li><Link to="/">Inicio</Link></li>
                                    <li>Contacto</li>
                                </ul>
                                <h1>Contacto</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="section-row">
                                    <h3>Contact Information</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                    <ul className="list-style">
                                        <li>
                                            <p><strong>Email:</strong> <a href="#">Webmag@email.com</a></p>
                                        </li>
                                        <li>
                                            <p><strong>Phone:</strong> 213-520-7376</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-5 col-md-offset-1">
                                <div className="section-row">
                                    <h3>Send A Message</h3>
                                    <form>
                                        <div className="row">
                                            <div className="mb-3">
                                                <label className="form-label">Email</label>
                                                <input className="form-control" type="email" name="email" />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Subject</label>
                                                <input className="form-control" type="text" name="subject" />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Message</label>
                                                <textarea className="form-control" name="message"
                                                    placeholder="Message" defaultValue={""} />
                                            </div>
                                            <button className="btn btn-primary">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Contact;