import React from 'react';
import { connect } from 'react-redux';
import { Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import { fetchTracks } from '../actions';

const TrackListScreen = ({ navigation, fetchTracks, tracks }) => {
  return (
    <>
      <NavigationEvents onWillFocus={fetchTracks} />
      <FlatList
        data={tracks}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('TrackDetail', { _id: item._id })
              }
            >
              <ListItem chevron title={item.name} />
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

TrackListScreen.navigationOptions = {
  title: 'Sophie Tracks',
  headerTitleStyle: {
    alignSelf: 'center',
  },
};

const styles = StyleSheet.create({});

const mapStateToProps = (state) => {
  return { tracks: state.tracks };
};

export default connect(mapStateToProps, { fetchTracks })(TrackListScreen);
