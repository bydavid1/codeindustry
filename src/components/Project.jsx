import React from 'react'

const Project = function(props) {
    return (
        <div class="item row">
            <a class="col-md-4 col-12" href="#" target="_blank">
                <img class="img-fluid project-image rounded shadow-sm" src={props.image} alt="project name" />
            </a>
            <div class="desc col-md-8 col-12">
                <h3 class="title"><a href={props.link} target="_blank">{props.title}</a></h3>
                <p class="mb-2">{props.description}</p>
                <p><a class="more-link" href={props.link} target="_blank"><i
                            class="fas fa-external-link-alt"></i>Demo</a></p>
            </div>
        </div>
    )
}

export default Project;