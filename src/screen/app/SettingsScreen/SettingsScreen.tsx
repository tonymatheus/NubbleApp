import React from 'react';

import {AppScreenProps} from 'src/routes/navigationType';

import {Screen, Text} from '@components';

//type ScreenProps = NativeStackScreenProps<AppStackParamList, 'SettingsScreen'>;

export const SettingsScreen = ({}: AppScreenProps<'SettingsScreen'>) => {
  return (
    <Screen canGoback>
      <Text preset="headingLarge">Settings Screen</Text>
    </Screen>
  );
};
