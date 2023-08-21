import React from 'react';

import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {Icon} from '../../../components/Icon/Icon';
import {Screen} from '../../../components/Screen/Screen';

export const LoginScreen = () => {
  return (
    <Screen>
      <Text bold preset="headingLarge">
        Olá
      </Text>
      <Text marginBottom="s40" preset="paragraphLarge">
        Digite seu email e senha
      </Text>
      <TextInput
        errorMessage="erro"
        label="E-mail"
        placeholder="email"
        boxProps={{marginBottom: 's10'}}
      />
      <TextInput
        label="senha"
        placeholder="password"
        RightComponent={<Icon color="gray2" name="eyeOn" />}
        boxProps={{marginBottom: 's20'}}
      />
      <Text color="primary" preset="paragraphSmall" bold>
        esqueci minha senha
      </Text>
      <Button title="Entrar" preset="primary" marginTop="s48" />
      <Button title="Criar Conta" preset="outline" marginTop="s12" />
    </Screen>
  );
};
