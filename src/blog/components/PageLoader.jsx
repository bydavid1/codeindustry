import React, { Component } from 'react';
import '../../../resources/scss/loader.scss'

class PageLoader extends Component {
    render() {
        return (
            <div className="d-flex vh-100 justify-content-center align-items-center">
                <div className="lds-spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }
}

export default PageLoader;