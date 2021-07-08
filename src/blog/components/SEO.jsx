import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';

class SEO extends Component {

    /*
    * @object: info {
        title,
        extract,
        image,
        type
    }
    */
    constructor(props) {
        super(props);
        this.defaultValues = {
            title: 'Code Industry',
            image : 'https://res.cloudinary.com/dtxys5wow/image/upload/v1625678786/main/logo_08fea0bd44.svg',
            extract: 'Un blog hecho por entusiastas de la programación',
            type: 'website'
        }
    }

    render() {

        let title, extract, image, type;

            title = this.props.info?.title ? `${this.props.info.title } | Code Industry` : this.defaultValues.title
            extract =  this.props.info?.extract ? this.props.info.extract?.slice(0, 150) : this.defaultValues.extract;
            image = this.props.info?.image ? this.props.info.image.url : this.defaultValues.image;
            type = this.props.info?.title ? this.props.info.type : this.defaultValues.type

        return (
            <MetaTags>
                <title>{ title }</title>
                <meta name="description" content={ extract } /> 

                {/* og meta */}
                <meta property="og:title" content={ title  }  />
                <meta property="og:description" content={ extract } />
                <meta property="og:image" content={ image }  />
                <meta property="og:type" content={ type }/>
                <meta property="og:url" content={window.location.href}/>

                {/* twitter meta */}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content={ type }/>
                <meta name="twitter:description" content={ extract }/>
                <meta name="twitter:image" content={ image }/>
                <meta property="twitter:url" content={window.location.href}/>
            </MetaTags>
        )
    }
}

export default SEO;