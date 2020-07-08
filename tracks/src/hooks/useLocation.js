import { useState, useEffect } from 'react';
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync,
} from 'expo-location';

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);

  useEffect(() => {
    let subscriber;
    const startWatching = async () => {
      try {
        const { granted } = await requestPermissionsAsync();
        if (!granted) {
          throw new Error('Location permission not granted.');
        }

        // Watch the User's movement
        subscriber = await watchPositionAsync(
          {
            // Higher the accuracy is, More battery consumed.
            accuracy: Accuracy.BestForNavigation,
            // Run every second Or
            timeInterval: 1000,
            // Run every 10 metre
            distanceInterval: 10,
          },
          // *** Callback: (location) => {
          //   addLocation(location);
          // }
          callback
        );
      } catch (err) {
        setErr(err);
      }
    };

    if (shouldTrack) {
      startWatching();
    } else {
      if (subscriber) {
        subscriber.remove();
      }
      subscriber = null;
    }

    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
  }, [shouldTrack, callback]);

  // Conventionally hook returns array. But there is no rule at all.
  return [err];
};
