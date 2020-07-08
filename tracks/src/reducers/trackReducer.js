import { CREATE_TRACK, FETCH_TRACKS } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_TRACK:
      return [...state, action.payload];
    default:
      return state;
  }
};
