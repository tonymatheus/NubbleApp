import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';
import {FromTextInput} from '../../../components/Form/FromTextInput/FromTextInput';
import {FormPasswordInput} from '../../../components/Form/FromTextInput/FormPasswordInput';
import {useForm} from 'react-hook-form';

type SignUpFormType = {
  username: string;
  fullname: string;
  email: string;
  password: string;
};

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

export const SignUpScreen = ({navigation}: ScreenProps) => {
  const {reset} = useResetNavigationSuccess();
  const {handleSubmit, control, formState} = useForm<SignUpFormType>({
    defaultValues: {
      username: '',
      fullname: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const submitForm = (formValues: SignUpFormType) => {
    console.log(formValues);
    // reset({
    //   title: 'Sua conta foi criada com sucesso',
    //   description: 'Agora é só fazer login na nossa plataforma',
    //   icon: {
    //     name: 'checkRound',
    //     color: 'success',
    //   },
    // });
  };
  return (
    <Screen canGoback scrollable>
      <Text bold preset="headingLarge" marginBottom="s32">
        Criar uma conta
      </Text>

      <FromTextInput
        control={control}
        name="username"
        rules={{
          required: 'username obrigatório',
        }}
        label="Seu username"
        placeholder="@"
        boxProps={{marginBottom: 's20'}}
      />

      <FromTextInput
        control={control}
        name="fullname"
        rules={{
          required: 'fullname obrigatório',
        }}
        label="Nome Completo"
        placeholder="Digite seu nome completo"
        autoCapitalize="words"
        boxProps={{marginBottom: 's20'}}
      />

      <FromTextInput
        control={control}
        name="email"
        rules={{
          required: 'email obrigatório',
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'E-mail inválido',
          },
        }}
        label="E-mail"
        placeholder="Digite seu E-mail"
        boxProps={{marginBottom: 's20'}}
      />

      <FormPasswordInput
        control={control}
        name="password"
        rules={{
          required: 'senha é obrigatória',
        }}
        label="Senha"
        placeholder="digite sua nova senha"
        boxProps={{marginBottom: 's48'}}
      />

      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Criar minha conta"
      />
    </Screen>
  );
};
