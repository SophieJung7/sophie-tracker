import {
  START_RECORDING,
  STOP_RECORDING,
  ADD_CURRENT_LOCATION,
  ADD_LOCATIONS,
  CHANGE_NAME,
} from '../actions/types';

const initialState = {
  recording: false,
  locations: [],
  currentLocation: null,
  name: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CURRENT_LOCATION:
      return { ...state, currentLocation: action.payload };
    case START_RECORDING:
      return { ...state, recording: true };
    case STOP_RECORDING:
      return { ...state, recording: false };
    case ADD_LOCATIONS:
      return { ...state, locations: [...state.locations, action.payload] };
    case CHANGE_NAME:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};
