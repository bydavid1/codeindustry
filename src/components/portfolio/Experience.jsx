import React from 'react';

const Experience = function(props) {
        return (
            <div>
                <div className="item">
                    <h3 className="title">{ props.jobTitle } <span className="place">{ props.company } </span>
                        <span className="year">{`${props.startDate} - ${props.endDate}`}</span></h3>
                    <p>{ props.description }</p>
                </div>
            </div>
        );
}

export default Experience;