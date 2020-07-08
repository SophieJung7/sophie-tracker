import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import locationReducer from './locationReducer';
import trackReducer from './trackReducer';

export default combineReducers({
  token: authReducer,
  error: errorReducer,
  location: locationReducer,
  track: trackReducer,
});
