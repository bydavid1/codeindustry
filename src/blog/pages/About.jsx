import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import MetaTags from 'react-meta-tags';
import Loader from '../components/Loader.jsx';
import { Link } from 'react-router-dom';
import adPlaceholder from '../../../storage/static/ad-1.jpg'
import api from '../api';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
        this.about = {}
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
        if (this.state.loading === true) {
            return (
                <Loader/>
            )
        } else {
            return (
                <>
                    <MetaTags>
                        <title>{ this.about.title }</title>
                        <meta name="description" content={ this.about.extract } /> 
    
                        {/* og meta */}
                        <meta property="og:title" content={ this.about.title }  />
                        <meta property="og:description" content={ this.about.extract } />
                        <meta property="og:image" content={ this.about.image ? this.about.image.url : ''}  />
                        <meta property="og:url" content={this.about.url}/>
                        <meta property="og:type" content={this.about.website}/>
                        {/* twitter meta */}
                        <meta name="twitter:card" content="summary_large_image"/>
                        <meta property="twitter:url" content={this.about.url}/>
                        <meta name="twitter:title" content={ this.about.title }/>
                        <meta name="twitter:description" content={ this.about.extract }/>
                        <meta name="twitter:image" content={ this.about.image ? this.about.image.url : ''}/>
                    </MetaTags>
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
                                        { this.about.Content }
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
            );
        }
    }
}

export default About;