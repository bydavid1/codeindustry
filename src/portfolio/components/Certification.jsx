import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Certification = function(props) {
    return (
        <div className="item">
            <h3 className="title">
                <FontAwesomeIcon icon="graduation-cap" className="mx-1"/>{props.title}</h3>
            <h4 className="university">{props.school} <span className="year">{props.dateRange}</span>
            </h4>
        </div>
    )
}

export default Certification