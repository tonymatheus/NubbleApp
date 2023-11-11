import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackParamList} from 'src/routes/AppStack';

import {Button, Screen, Text} from '@components';

type ScreenProps = NativeStackScreenProps<AppStackParamList, 'SettingsScreen'>;

export const SettingsScreen = ({navigation}: ScreenProps) => {
  return (
    <Screen canGoback>
      <Text preset="headingLarge">Settings Screen</Text>
      <Button
        title="Salvar"
        onPress={() => navigation.navigate('HomeScreen')}
      />
    </Screen>
  );
};
