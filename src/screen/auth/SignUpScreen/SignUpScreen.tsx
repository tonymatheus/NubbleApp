import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {EyeOnIcon} from '../../../assets/icons/EyeOnIcon';
import {Button} from '../../../components/Button/Button';

export const SignUpScreen = () => {
  const submitForm = () => {
    //TODO: implementar submit form
  };
  return (
    <Screen canGoback>
      <Text bold preset="headingLarge" marginBottom="s32">
        Criar uma conta
      </Text>
      <TextInput
        label="Seu username"
        placeholder="@"
        errorMessage="Digite um username válido"
        boxProps={{marginBottom: 's20'}}
      />
      <TextInput
        label="Nome Completo"
        placeholder="Digite seu nome completo"
        errorMessage="Digite um nome válido"
      />
      <TextInput
        label="E-mail"
        placeholder="Digite seu E-mail"
        errorMessage="Digite um username válido"
        boxProps={{marginBottom: 's20'}}
      />
      <TextInput
        label="Ssenha"
        placeholder="Digite sua senha"
        errorMessage="Digite um username válido"
        RightComponent={<EyeOnIcon />}
        boxProps={{marginBottom: 's40'}}
      />
      <Button onPress={submitForm} title="Criar minha conta" />
    </Screen>
  );
};
