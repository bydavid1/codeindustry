import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import MetaTags from 'react-meta-tags';
import adPlaceholder from '../../../storage/static/ad-1.jpg'
import api from '../api';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            about: {}
        }
    }
    

    componentDidMount() {
        api.get('/about-page')
        .then(response => {
            this.setState({
                about: response.data
            })
        })
    }
    
    render() {
        return (
            <>
                <MetaTags>
                    <title>{ this.state.about.title }</title>
                    <meta name="description" content={ this.state.about.extract } /> 

                    {/* og meta */}
                    <meta property="og:title" content={ this.state.about.title }  />
                    <meta property="og:description" content={ this.state.about.extract } />
                    <meta property="og:image" content={ this.state.about.image ? this.state.about.image.url : ''}  />
                    <meta property="og:url" content={this.state.about.url}/>
                    <meta property="og:type" content={this.state.about.website}/>
                    {/* twitter meta */}
                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta property="twitter:url" content={this.state.about.url}/>
                    <meta name="twitter:title" content={ this.state.about.title }/>
                    <meta name="twitter:description" content={ this.state.about.extract }/>
                    <meta name="twitter:image" content={ this.state.about.image ? this.state.about.image.url : ''}/>
                </MetaTags>
                <div className="page-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10">
                                <ul className="page-header-breadcrumb">
                                    <li><a href="index.html">Home</a></li>
                                    <li>{this.state.about.title}</li>
                                </ul>
                                <h1>{this.state.about.title}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <ReactMarkdown>
                                    { this.state.about.Content }
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

export default About;