import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';
import {Controller, useForm} from 'react-hook-form';

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

      <Controller
        control={control}
        name="username"
        rules={{
          required: 'username obrigatório',
        }}
        render={({field, fieldState}) => (
          <TextInput
            value={field.value}
            onChangeText={field.onChange}
            label="Seu username"
            placeholder="@"
            errorMessage={fieldState.error?.message}
            boxProps={{marginBottom: 's20'}}
          />
        )}
      />

      <Controller
        control={control}
        name="fullname"
        rules={{
          required: 'fullname obrigatório',
        }}
        render={({field, fieldState}) => (
          <TextInput
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
            label="Nome Completo"
            placeholder="Digite seu nome completo"
          />
        )}
      />

      <Controller
        control={control}
        name="email"
        rules={{
          required: 'email obrigatório',
        }}
        render={({field, fieldState}) => (
          <TextInput
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
            label="E-mail"
            placeholder="Digite seu E-mail"
            boxProps={{marginBottom: 's20'}}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        rules={{
          required: 'senha é obrigatória',
        }}
        render={({field, fieldState}) => (
          <PasswordInput
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
            label="Senha"
            placeholder="digite sua nova senha"
            boxProps={{marginBottom: 's48'}}
          />
        )}
      />
      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Criar minha conta"
      />
    </Screen>
  );
};
