import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { setNavigator } from './src/navigationRef';
import reducers from './src/reducers';

// **** Screens
import FigureAuthScreen from './src/screens/FigureAuthScreen';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';

const switchNavigator = createSwitchNavigator({
  FigureAuth: FigureAuthScreen,
  loginFlow: createStackNavigator({
    SignUp: SignupScreen,
    SignIn: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen,
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <Provider store={createStore(reducers, {}, applyMiddleware(thunk))}>
      <App ref={(navigator) => setNavigator(navigator)} />
    </Provider>
  );
};
