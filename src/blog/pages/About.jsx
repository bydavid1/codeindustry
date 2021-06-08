import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
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
                <div className="page-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10">
                                <ul className="page-header-breadcrumb">
                                    <li><a href="index.html">Home</a></li>
                                    <li>Acerca de</li>
                                </ul>
                                <h1>Acerca de</h1>
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