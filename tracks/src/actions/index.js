import { AsyncStorage } from 'react-native';
import {
  SIGN_IN,
  SIGN_UP,
  SIGN_OUT,
  ADD_ERROR,
  CLEAR_ERROR,
  ADD_LOCATIONS,
  ADD_CURRENT_LOCATION,
  STOP_RECORDING,
  START_RECORDING,
  CHANGE_NAME,
  CREATE_TRACK,
  FETCH_TRACKS,
  RESET,
} from './types';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

// **************** Authentication Actions **************** //
export const signUp = ({ email, password }) => async (dispatch) => {
  try {
    const res = await trackerApi.post('/signup', { email, password });
    await AsyncStorage.setItem('token', res.data.token);
    dispatch({
      type: SIGN_UP,
      payload: res.data.token,
    });
    navigate('TrackList');
  } catch (err) {
    console.log(err);
    dispatch({
      type: ADD_ERROR,
      payload: 'Signup failed',
    });
  }
};

export const tryLocalSignIn = () => async (dispatch) => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({
      type: SIGN_IN,
      payload: token,
    });
    navigate('TrackList');
  } else {
    navigate('loginFlow');
  }
};

export const signIn = ({ email, password }) => async (dispatch) => {
  try {
    const res = await trackerApi.post('/signin', { email, password });
    await AsyncStorage.setItem('token', res.data.token);
    dispatch({
      type: SIGN_IN,
      payload: res.data.token,
    });
    navigate('TrackList');
  } catch (err) {
    console.log(err);
    dispatch({
      type: ADD_ERROR,
      payload: 'Email or Password is wrong.',
    });
  }
};

export const signOut = () => async (dispatch) => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: SIGN_OUT });
  navigate('loginFlow');
};

export const clearError = () => {
  return {
    type: CLEAR_ERROR,
  };
};

// **************** Tracking Actions **************** //

export const fetchTracks = () => async (dispatch) => {
  const res = await trackerApi.get('/tracks');
  dispatch({
    type: FETCH_TRACKS,
    payload: res.data,
  });
};

export const createTrack = (name, locations) => async (dispatch) => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    await trackerApi.post('/tracks', {
      name,
      locations,
    });
    dispatch({
      type: RESET,
    });
    navigate('TrackList');
  }
};

export const addLocation = (location, recording) => (dispatch) => {
  dispatch({
    type: ADD_CURRENT_LOCATION,
    payload: location,
  });
  if (recording) {
    dispatch({
      type: ADD_LOCATIONS,
      payload: location,
    });
  }
};

export const changeName = (name) => {
  return {
    type: CHANGE_NAME,
    payload: name,
  };
};

export const startRecording = () => {
  return {
    type: START_RECORDING,
  };
};

export const stopRecording = () => {
  return {
    type: STOP_RECORDING,
  };
};

// export const changeName = (name) => (dispatch) => {
//   dispatch({
//     type: CHANGE_NAME,
//     payload: name,
//   });
// };

// export const startRecording = () => (dispatch) => {
//   dispatch({
//     type: START_RECORDING,
//   });
// };

// export const stopRecording = () => (dispatch) => {
//   dispatch({
//     type: STOP_RECORDING,
//   });
// };
