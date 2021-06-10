import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Project = function(props) {
    return (
        <div className="item row">
            <a className="col-md-4 col-12" href="#" target="_blank">
                <img className="img-fluid project-image rounded shadow-sm" src={props.image} alt="project name" />
            </a>
            <div className="desc col-md-8 col-12">
                <h3 className="title"><a href={props.link} target="_blank">{props.title}</a></h3>
                <p className="mb-2">{props.description}</p>
                <p><a className="more-link" href={props.link} target="_blank"><FontAwesomeIcon icon="external-link-alt"/>Demo</a></p>
            </div>
        </div>
    )
}

export default Project;