import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {Screen, Text, Button} from '@components';
import {FormTextInput} from '@components';
import {useResetNavigationSuccess} from '@hooks';
import {AuthScreenProps} from '@routes';

import {
  ForgotPasswordScheme,
  forgotPasswordScheme,
} from './forgotPasswordScheme';

export const ForgotPasswordScreen =
  ({}: AuthScreenProps<'ForgotPasswordScreen'>) => {
    const {reset} = useResetNavigationSuccess();

    const {control, handleSubmit, formState} = useForm({
      resolver: zodResolver(forgotPasswordScheme),
      defaultValues: {
        email: '',
      },
      mode: 'onChange',
    });

    const submitform = (_values: ForgotPasswordScheme) => {
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
      <Screen canGoBack>
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
