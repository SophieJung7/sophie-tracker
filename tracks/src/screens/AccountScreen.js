import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import { signOut } from '../actions';
import Spacer from '../components/Spacer';

const AccountScreen = ({ signOut }) => {
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text style={{ fontSize: 48 }}>Account Screen</Text>
      <Spacer>
        <Button title='Sign out' onPress={signOut} />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default connect(null, { signOut })(AccountScreen);
