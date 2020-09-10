import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

const TrackDetailScreen = ({ navigation, tracks }) => {
  const _id = navigation.getParam('_id');
  // Javascript find function
  const track = tracks.find((t) => t._id === _id);
  const initialCoords = track.locations[0].coords;
  console.log(track.locations);
  return (
    <>
      <Text style={{ fontSize: 48 }}>{track.name}</Text>
      <MapView
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords,
        }}
        style={styles.map}
      >
        <Polyline coordinates={track.locations.map((loc) => loc.coords)} />
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

const mapStateToProps = (state) => {
  return { tracks: state.tracks };
};

export default connect(mapStateToProps)(TrackDetailScreen);
