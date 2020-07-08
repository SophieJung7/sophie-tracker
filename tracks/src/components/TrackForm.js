import React from 'react';
import { Input, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Spacer from './Spacer';

const TrackForm = (props) => {
  const { name, recording, locations } = props.location;
  const { changeName, startRecording, stopRecording, createTrack } = props;

  return (
    <>
      <Spacer>
        <Input
          value={name}
          onChangeText={changeName}
          placeholder='Enter Track Name'
        />
      </Spacer>
      <Spacer>
        {recording ? (
          <Button title='Stop' onPress={() => stopRecording(locations)} />
        ) : (
          <Button title='Start Recording' onPress={startRecording} />
        )}
      </Spacer>
      <Spacer>
        {!recording && locations.length ? (
          <Button
            title='Save Recording'
            onPress={() => {
              createTrack(name, locations);
            }}
          />
        ) : null}
      </Spacer>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    location: state.location,
  };
};

export default connect(mapStateToProps, actions)(TrackForm);
