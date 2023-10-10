import React from 'react';

import {Icon} from '../../../components/Icon/Icon';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';

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
