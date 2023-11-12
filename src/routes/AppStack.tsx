import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SettingsScreen} from '@screens';

import {AppTabNavigator} from './AppTabNavigator';

export type AppStackParamList = {
  AppTabNavigator: undefined;
  SettingsScreen: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName="AppTabNavigator">
      <Stack.Screen component={AppTabNavigator} name="AppTabNavigator" />
      <Stack.Screen component={SettingsScreen} name="SettingsScreen" />
    </Stack.Navigator>
  );
};
