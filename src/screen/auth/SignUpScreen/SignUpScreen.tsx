import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {EyeOnIcon} from '../../../assets/icons/EyeOnIcon';
import {Button} from '../../../components/Button/Button';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

export const SignUpScreen = ({navigation}: ScreenProps) => {
  const submitForm = () => {
    //TODO: implementar submit form
  };
  return (
    <Screen canGoback scrollable>
      <Text bold preset="headingLarge" marginBottom="s32">
        Criar uma conta
      </Text>
      <TextInput
        label="Seu username"
        placeholder="@"
        errorMessage="Digite um username válido"
        boxProps={{marginBottom: 's20'}}
      />
      <TextInput label="Nome Completo" placeholder="Digite seu nome completo" />
      <TextInput
        label="E-mail"
        placeholder="Digite seu E-mail"
        boxProps={{marginBottom: 's20'}}
      />
      <PasswordInput label="Senha" placeholder="digite sua nova senha" />
      <Button onPress={submitForm} title="Criar minha conta" />
    </Screen>
  );
};
