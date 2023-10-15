import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';
import {FromTextInput} from '../../../components/Form/FromTextInput/FromTextInput';
import {Controller, useForm} from 'react-hook-form';
import {
  ForgotPasswordScheme,
  forgotPasswordScheme,
} from './forgotPasswordScheme';
import {zodResolver} from '@hookform/resolvers/zod';

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>;

export const ForgotPasswordScreen = ({navigation}: ScreenProps) => {
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
      <FromTextInput
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
