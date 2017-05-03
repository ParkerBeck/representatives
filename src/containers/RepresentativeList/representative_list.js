import React, { Component } from 'react';
import { connect } from 'react-redux'; 

import RepresentativeBlock from '../../components/RepresentativeBlock/representative_block';

import './representative_list.css';

import _ from 'lodash';

class RepresentativeList extends Component {

    renderBlock(representative) {
        console.log(representative);
        return (
                representative.officials.map( official => {
                    return <RepresentativeBlock key={official.name} office={representative.office} official={official}/>
                })

        );
    }
    
    render() {
        if (!this.props.representatives) {
            return <div>Enter in an address to find more information about your representatives</div>
        }

        return (
        <div className="card-deck">
            { this.props.representatives.map( (representative, index) => {
               // if ((index - 1) % 4) {
                    return this.renderBlock(representative)
                //}
                //return [this.renderBlock(representative), <div className="w-100 hidden-md-down hidden-xl-up"></div>]; 
            })
            }
        </div>
        );
    }
}

function mapStateToProps({ representatives }) {
    return { representatives };
}

export default connect(mapStateToProps)(RepresentativeList)