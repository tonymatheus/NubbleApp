import React from 'react';

import {AppScreenProps} from 'src/routes/navigationType';

import {Button, Screen, Text} from '@components';

//type ScreenProps = NativeStackScreenProps<AppStackParamList, 'SettingsScreen'>;

export const SettingsScreen = ({
  navigation,
}: AppScreenProps<'SettingsScreen'>) => {
  return (
    <Screen canGoback>
      <Text preset="headingLarge">Settings Screen</Text>
    </Screen>
  );
};
