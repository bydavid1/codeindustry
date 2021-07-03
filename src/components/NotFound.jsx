import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import graphic from '../../storage/static/notfound.svg'

class NotFound extends Component {
    render() {
        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src={graphic} alt="notfound" className="img-fluid"/>
                    </div>
                    <div className="col-md-6 align-self-center">
                    <h1>404</h1>
                        <h2>No pudimos encontrar la pagina.</h2>
                        <p>La pagina que buscas no existe, o fue removida.
                        </p>
                        <Link to="/" className="btn btn-primary">Volver al inicio</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotFound;