import React from 'react';

import {AppScreenProps} from 'src/routes/navigationType';

import {Button, Screen, Text} from '@components';

export const SettingsScreen = ({
  navigation,
}: AppScreenProps<'SettingsScreen'>) => {
  return (
    <Screen canGoback>
      <Text preset="headingLarge">Settings Screen</Text>
      <Button
        title="New Post"
        onPress={() =>
          navigation.navigate('AppTabNavigator', {
            screen: 'NewPostScreen',
          })
        }
      />
    </Screen>
  );
};
