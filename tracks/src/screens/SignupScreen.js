import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { signUp, clearError } from '../actions';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import Link from '../components/Link';

const SignupScreen = ({ signUp, clearError, error }) => {
  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearError} />
      <AuthForm
        bgText='Sign Up for Tracker!'
        btnTitle='Sign Up'
        error={error}
        onSubmit={signUp}
      />
      <Link text='Already have an account? Sign In!' navigateTo='SignIn' />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
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
export default connect(mapStateToProps, { signUp, clearError })(SignupScreen);
