import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { connect } from 'react-redux';

const Map = ({ location }) => {
  const { currentLocation, locations } = location;

  if (!currentLocation) {
    return <ActivityIndicator size='large' style={{ marginTop: 200 }} />;
  }

  return (
    <MapView
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      region={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      style={styles.map}
    >
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor='rgba(158, 158, 255, 1.0)'
        fillColor='rgba(158, 158, 255, 0.3)'
      />
      <Polyline coordinates={locations.map((location) => location.coords)} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

const mapStateToProps = (state) => {
  return { location: state.location };
};

export default connect(mapStateToProps)(Map);
