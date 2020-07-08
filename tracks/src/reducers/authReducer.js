import { SIGN_IN, SIGN_UP, SIGN_OUT } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case SIGN_IN:
    case SIGN_UP:
      return action.payload;
    case SIGN_OUT:
      return null;
    default:
      return state;
  }
};
