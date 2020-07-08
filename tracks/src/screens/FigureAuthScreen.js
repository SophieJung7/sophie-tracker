import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { tryLocalSignIn } from '../actions';

const FigureAuthScreen = ({ tryLocalSignIn }) => {
  useEffect(() => {
    tryLocalSignIn();
  }, []);

  return null;
};

export default connect(null, { tryLocalSignIn })(FigureAuthScreen);
