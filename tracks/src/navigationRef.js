import { NavigationActions } from 'react-navigation';

let navigator;

export const setNavigator = (navigationObject) => {
  navigator = navigationObject;
};

export const navigate = (routeName, params) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName: routeName,
      params: params,
    })
  );
};
