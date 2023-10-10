import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';

import {Screen} from '../../../components/Screen/Screen';
import {RootStackParamList} from '../../../routes/Routes';
import {TouchableOpacityBox} from '../../../components/Box/Box';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export const LoginScreen = ({navigation}: ScreenProps) => {
  const navigateToSignUpScreen = () => {
    navigation.navigate('SignUpScreen');
  };

  const navigateToForgotPasswordScreen = () => {
    navigation.navigate('ForgotPasswordScreen');
  };

  return (
    <Screen scrollable>
      <Text bold preset="headingLarge">
        Olá
      </Text>
      <Text marginBottom="s40" preset="paragraphLarge">
        Digite seu email e senha
      </Text>
      <TextInput
        label="E-mail"
        placeholder="email"
        boxProps={{marginBottom: 's10'}}
      />
      <PasswordInput label="senha" placeholder="password" />
      <TouchableOpacityBox onPress={navigateToForgotPasswordScreen}>
        <Text color="primary" preset="paragraphSmall" bold>
          esqueci minha senha
        </Text>
      </TouchableOpacityBox>
      <Button title="Entrar" preset="primary" marginTop="s48" />
      <Button
        title="Criar Conta"
        preset="outline"
        marginTop="s12"
        onPress={navigateToSignUpScreen}
      />
    </Screen>
  );
};
