import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen, SettingsScreen} from '@screens';

export type AppStackParamList = {
  HomeScreen: undefined;
  SettingsScreen: undefined;
};

export const AppStack = () => {
  const Stack = createNativeStackNavigator<AppStackParamList>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName="HomeScreen">
      <Stack.Screen component={HomeScreen} name="HomeScreen" />
      <Stack.Screen component={SettingsScreen} name="SettingsScreen" />
    </Stack.Navigator>
  );
};
