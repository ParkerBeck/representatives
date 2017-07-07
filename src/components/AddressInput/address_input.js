import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getRepresentatives } from '../../actions/index';

import './address_input.css';

class AddressInput extends Component { 
    constructor(props) {
        super(props);

        this.state = { input: '' };
        
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({ input: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.getRepresentatives(this.state.input);
        this.setState({ input: ""});
    }

    render() {
        return (
            <form className="input-group" onSubmit={this.onFormSubmit}>
                <input 
                    placeholder="Enter the address" 
                    className="form-control" 
                    onChange={this.onInputChange} 
                    value={this.state.input} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getRepresentatives}, dispatch);
}

export default connect(null, mapDispatchToProps)(AddressInput)