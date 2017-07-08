import React from 'react';

import './representative_block.css';

import PartyColor from '../../helpers/party_color.js';

export default (props) => {
    const placeholder = `http://placehold.it/213x200?text=${props.official.name}`.split(' ').join('+');
    const titleStyle = {
        color: PartyColor(props.official.party)
    }
    return (
        <div className="card">
            <img 
                className="card-img-top img-fluid"
                //short circuit
                src={ props.official.photoUrl ||
                        placeholder }
                alt="Representative" />
            <div className="card-block">
                <h4 className="card-title" style={titleStyle}>{props.official.name}</h4>
                <p className="card-text">{props.office}</p>
            </div>
        </div>
    );
}