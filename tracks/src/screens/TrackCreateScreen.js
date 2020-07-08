import './_mockLocation';
import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import { addLocation } from '../actions';
import Map from '../components/Map';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = ({ addLocation, isFocused, location }) => {
  const { recording } = location;

  // Move Logic to useLocation component
  const callback = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording]
  );

  const [err] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable location services.</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

const mapStateToProps = (state) => {
  return { location: state.location };
};

export default withNavigationFocus(
  connect(mapStateToProps, { addLocation })(TrackCreateScreen)
);
