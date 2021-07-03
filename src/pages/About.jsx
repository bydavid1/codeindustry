//Core
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
//Components
import { withError } from '../components/ErrorBoundary.jsx';
import SEO from '../components/SEO.jsx'
import Loader from '../components/Loader.jsx';
//Services
import api from '../api';
//Assets
import adPlaceholder from '../../storage/static/ad.svg'

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
        this.about = {
            SEO: {}
        }
    }
    

    componentDidMount() {
        api.get('/about-page')
        .then(response => {
            this.about = response.data;

            this.setState({
                loading: false,
            })
        })
        .catch(error => {
            this.setState({
                loading: false
            })
        })
    }
    
    render() {
        return (
            <>
                {
                    this.state.loading === true ? (
                        <Loader/>
                    ) : (
                        <>
                            <SEO info={this.about.SEO} />
                            <div className="page-header">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-10">
                                            <ul className="page-header-breadcrumb">
                                                <li><Link to="/">Inicio</Link></li>
                                                <li>{this.about.title}</li>
                                            </ul>
                                            <h1>{this.about.title}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="section">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <ReactMarkdown>
                                                { this.about.content }
                                            </ReactMarkdown>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="aside-widget text-center">
                                                <a href="#" style={{display: 'inline-block', margin: 'auto'}}>
                                                    <img className="img-responsive" src={adPlaceholder} alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
            </>
        )
    }
}

export default withError(About);