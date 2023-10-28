import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useForm} from 'react-hook-form';

import {Screen, Text, Button} from '@components';
import {FormTextInput} from '@components';
import {useResetNavigationSuccess} from '@hooks';
import {RootStackParamList} from '@routes';

import {
  ForgotPasswordScheme,
  forgotPasswordScheme,
} from './forgotPasswordScheme';

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>;

export const ForgotPasswordScreen = ({}: ScreenProps) => {
  const {reset} = useResetNavigationSuccess();

  const {control, handleSubmit, formState} = useForm({
    resolver: zodResolver(forgotPasswordScheme),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });

  const submitform = (values: ForgotPasswordScheme) => {
    console.log(values);
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
      <FormTextInput
        control={control}
        label="E-mail"
        name="email"
        placeholder="digite seu email"
        boxProps={{mb: 's40'}}
      />
      <Button
        disabled={!formState.isValid}
        title="Recuperar senha"
        onPress={handleSubmit(submitform)}
      />
    </Screen>
  );
};
