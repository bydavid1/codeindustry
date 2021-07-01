import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import graphic from '../../../storage/static/error.svg'

class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Show internal error component
      return { hasError: true };
    }
  
    render() {
      if (this.state.hasError) {
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
        )
      }
  
      return this.props.children; 
    }
  }

export default ErrorBoundary;