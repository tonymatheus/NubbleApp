import React from 'react';

import {useAuthSignIn} from '@domain';
import {zodResolver} from '@hookform/resolvers/zod';
import {useToast} from '@services';
import {useForm} from 'react-hook-form';

import {
  Text,
  Screen,
  Button,
  TouchableOpacityBox,
  FormPasswordInput,
  FormTextInput,
} from '@components';
import {AuthScreenProps} from '@routes';

import {LoginSchema, loginScheme} from './loginScheme';

export const LoginScreen = ({navigation}: AuthScreenProps<'LoginScreen'>) => {
  const {showToast} = useToast();
  const {isLoading, signIn} = useAuthSignIn({
    onError: message => showToast({message: message, type: 'error'}),
  });

  const {control, formState, handleSubmit} = useForm<LoginSchema>({
    resolver: zodResolver(loginScheme),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const submitForm = ({email, password}: LoginSchema) => {
    signIn({
      email,
      password,
    });
  };

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

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="senha"
        placeholder="digite sua senha"
        boxProps={{marginBottom: 's20'}}
      />

      <TouchableOpacityBox onPress={navigateToForgotPasswordScreen}>
        <Text color="primary" preset="paragraphSmall" bold>
          esqueci minha senha
        </Text>
      </TouchableOpacityBox>
      <Button
        loading={isLoading}
        title="Entrar"
        preset="primary"
        marginTop="s48"
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
      />
      <Button
        title="Criar Conta"
        preset="outline"
        marginTop="s12"
        onPress={navigateToSignUpScreen}
      />
    </Screen>
  );
};
