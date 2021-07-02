import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';

class SEO extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.info != undefined) {
            const extract = this.props.info.extract ? this.props.info.extract.slice(0, 150) : ''
            const image = this.props.info.image ? this.props.info.image.url : ''
    
            return (
                <MetaTags>
                    <title>{ this.props.info.title }</title>
                    <meta name="description" content={ extract } /> 
    
                    {/* og meta */}
                    <meta property="og:title" content={ this.props.info.title }  />
                    <meta property="og:description" content={ extract } />
                    <meta property="og:image" content={ image }  />
                    <meta property="og:type" content={this.props.info.website}/>
                    <meta property="og:url" content={window.location.href}/>
                    {/* twitter meta */}
                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta name="twitter:title" content={ this.props.info.title }/>
                    <meta name="twitter:description" content={ extract }/>
                    <meta name="twitter:image" content={ image }/>
                    <meta property="twitter:url" content={window.location.href}/>
                </MetaTags>
            );
        } else {
            return (
                <MetaTags>
                    <title>Code industry</title>
                    <meta name="description" content="A blog for enthusiasts" /> 

                    {/* og meta */}
                    <meta property="og:title" content="Code industry" />
                    <meta property="og:description" content="A blog for enthusiasts" />
                    <meta property="og:type" content="website"/>
                    <meta property="og:url" content={window.location.href}/>
                    {/* twitter meta */}
                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta name="twitter:title" content="Code industry"/>
                    <meta name="twitter:description" content="A blog for enthusiasts"/>
                <meta property="twitter:url" content={window.location.href}/>
                </MetaTags>
            )
        }
    }
}

export default SEO;