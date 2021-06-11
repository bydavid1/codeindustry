import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import graphic from '../../../storage/static/error.svg'

class Error500 extends Component {
    render() {
        return (
            <div className="container py-5">
                <div className="row gx-5">
                    <div className="col-md-6">
                        <img src={graphic} alt="error" className="img-fluid"/>
                    </div>
                    <div className="col-md-6 align-self-center">
                    <h1>500</h1>
                        <h2>Ocurrió algo inesperado.</h2>
                        <p>Si el problema persiste, contactese con el administrador.</p>
                        <Link to="/" className="btn btn-primary">Volver al inicio</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Error500;