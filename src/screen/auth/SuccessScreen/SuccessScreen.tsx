import React from 'react';

import {Icon, Text, Button, Screen} from '@components';
import {AuthScreenProps} from '@routes';

export const SuccessScreen = ({
  route,
  navigation,
}: AuthScreenProps<'SuccessScreen'>) => {
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
