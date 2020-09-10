import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import locationReducer from './locationReducer';
import tracksReducer from './trackReducer';

export default combineReducers({
  token: authReducer,
  error: errorReducer,
  location: locationReducer,
  tracks: tracksReducer,
});
