import React from 'react'

const Skill = function(props) {
    return (       
        <div class="item">
            <h3 class="level-title">{props.title}<span class="level-label" data-toggle="tooltip" data-placement="left"
                    data-animation="true" title={props.tooltip}><i
                        class="fas fa-info-circle"></i>{props.status}</span></h3>
            <div class="level-bar">
                <div class="level-bar-inner" data-level={props.level + "%"}>
                </div>
            </div>
        </div>
    )
}

export default Skill;