import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { signIn, clearError } from '../actions';
import AuthForm from '../components/AuthForm';
import Link from '../components/Link';
import { NavigationEvents } from 'react-navigation';

const SigninScreen = ({ signIn, clearError, error }) => {
  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearError} />
      <AuthForm
        bgText='Sign In for Tracker!'
        btnTitle='Sign In'
        error={error}
        onSubmit={signIn}
      />
      <Link text='Dont have an account? Sign Up Now!' navigateTo='SignUp' />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    marginBottom: 200,
  },
});

const mapStateToProps = (state) => {
  return { error: state.error };
};
export default connect(mapStateToProps, { signIn, clearError })(SigninScreen);
