import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = axios.create({
  baseURL: 'http://cb9d3f8f0ea7.ngrok.io',
});

// Run 1st function before making any request
// 2nd function: If the request fails, run 2nd function

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    console.log(`TOKEN: ${token}`);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
