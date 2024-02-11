import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './routes';

const Stack = createStackNavigator();

import {
  Home,
  LoginScreen,
  ClimateControl,
  Settings,
  Profile,
  Info,
} from '../screens';

export const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Routes.Profile}>
      <Stack.Screen name={Routes.Profile} component={Profile} />
      <Stack.Screen name={Routes.Info} component={Info} />

    </Stack.Navigator>
  );
};