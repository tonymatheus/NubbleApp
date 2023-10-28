import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Icon, Text, Button, Screen} from '@components';
import {RootStackParamList} from '@routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;

export const SuccessScreen = ({route, navigation}: ScreenProps) => {
  const goBackToBegin = () => {
    //TODO: navegar para tela inicial
    navigation.goBack();
  };

  return (
    <Screen>
      <Icon {...route.params.icon} size={48} color={route.params.icon.color} />
      <Text marginTop="s24" preset="headingLarge">
        {route.params?.title}
      </Text>
      <Text marginTop="s16" preset="paragraphLarge">
        {route.params.description}
      </Text>
      <Button
        marginTop="s40"
        title="Voltar ao início"
        onPress={goBackToBegin}
      />
    </Screen>
  );
};
