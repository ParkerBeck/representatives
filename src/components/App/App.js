import React, { Component } from 'react';
import './App.css';

import AddressInput from '../AddressInput/address_input'
import RepresentativeList from '../RepresentativeList/representative_list'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Representatives and stuff</h2>
        </div>
        <div>
          <AddressInput />
          <RepresentativeList />
        </div>

      </div>
    );
  }
}

export default App;
