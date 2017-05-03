import { combineReducers } from 'redux';

import RepresentativeReducer from './representatives';

const rootReducer = combineReducers({
  representatives: RepresentativeReducer
});

export default rootReducer;
