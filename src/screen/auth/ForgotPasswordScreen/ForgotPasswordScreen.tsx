import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>;

export const ForgotPasswordScreen = ({navigation}: ScreenProps) => {
  const {reset} = useResetNavigationSuccess();

  const submitform = () => {
    reset({
      title: `Enviamos as instruções para seu ${'\n'}e-mail`,
      description:
        'Clique no link enviado no seu e-mail para recuperar sua senha',
      icon: {
        name: 'messageRound',
        color: 'primary',
      },
    });
  };

  return (
    <Screen canGoback>
      <Text preset="headingLarge" marginBottom="s16">
        Esqueci minha senha
      </Text>
      <Text preset="paragraphLarge" marginBottom="s32">
        Digite seu email e enviaremos as instruções para redefinição de senha
      </Text>
      <TextInput label="e-mail" placeholder="Digite seu e-mail" />
      <Button title="Recuperar senha" marginTop="s48" onPress={submitform} />
    </Screen>
  );
};
