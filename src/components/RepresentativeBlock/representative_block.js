import React from 'react';

import './representative_block.css';


const partyColor = (party) => {
    switch(party) {
        case "Republican": return "#FF0000";
        case "Democratic": return "#0000FF";
        default: return "#000000";
    }

};

export default (props) => {
    const placeholder = `http://placehold.it/213x200?text=No+image+for+${props.official.name}`.split(' ').join('+');
    const color = {
        color: partyColor(props.official.party)
    };
    return (
        <div className="card">
            <img 
                className="card-img-top img-fluid"
                src={props.official.photoUrl ||
                        placeholder}
                alt="" />
            <div className="card-block">
                <h4 className="card-title" style={color}>{props.official.name}</h4>
                <p className="card-text">{props.office}</p>
            </div>
        </div>
    );
}