import React from 'react';
import { Link } from 'react-router-dom';
import graphic from '../../../storage/static/error.svg'

export const withError = (Component) => {
  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      console.log(`Sending...`);
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
  
      return <Component {...this.props}/>; 
    }
  }

  return ErrorBoundary;
}