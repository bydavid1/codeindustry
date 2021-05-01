import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Skill = function(props) {
    return (       
        <div className="item">
            <h3 className="level-title">{props.title}<span className="level-label" data-toggle="tooltip" data-placement="left"
                    data-animation="true" title={props.tooltip}><FontAwesomeIcon icon="info-circle"/>{props.status}</span></h3>
            <div className="level-bar">
                <div className="level-bar-inner" data-level={props.level + "%"}>
                </div>
            </div>
        </div>
    )
}

export default Skill;