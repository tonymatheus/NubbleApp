import React from 'react';

import {Button, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export const HomeScreen = ({navigation}: AppTabScreenProps<'HomeScreen'>) => {
  return (
    <Screen>
      <Text preset="headingLarge">Home Screen</Text>
      <Button
        title="Settings"
        onPress={() => navigation.navigate('SettingsScreen')}
      />
      <Text preset="headingLarge">Home Screen</Text>
      <Button
        title="Favorites"
        onPress={() => navigation.navigate('FavoriteScreen')}
      />
    </Screen>
  );
};
