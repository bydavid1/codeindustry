import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Skill = function(props) {
    return (       
        <div className="item">
            <h3 className="level-title">{props.title}<span className="level-label" data-toggle="tooltip" data-placement="left"
                    data-animation="true" title={props.tooltip}><FontAwesomeIcon icon="info-circle"/>{props.status}</span></h3>
            <div className="progress">
                <div className="progress-bar bg-success" style={{width: props.level + '%'}} role="progressbar" aria-valuenow={props.level} aria-valuemin="0" aria-valuemax="100">
                </div>
            </div>
        </div>
    )
}

export default Skill;