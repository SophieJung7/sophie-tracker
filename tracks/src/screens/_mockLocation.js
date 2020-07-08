import * as Location from 'expo-location';

// 10 metres in real world both for longitude and latitude(roughly)
const tenMetersWithDegress = 0.0001;

// This is where the Zenith is.. where I am
// This is actualy data you can get from your mobile device.

const getLocation = (increment) => {
  return {
    timestamp: 1000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: 114.174204 + increment * tenMetersWithDegress,
      latitude: 22.2744538 + increment * tenMetersWithDegress,
    },
  };
};

// Every second, the location will change by 10 meter
let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged', {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  });
  counter++;
}, 1000);
