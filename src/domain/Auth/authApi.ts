import {api} from '@api';

import {AuthCredentials} from './authTypes';

async function signIn(
  email: string,
  password: string,
): Promise<AuthCredentials> {
  const response = await api.post<AuthCredentials>('login', {
    email,
    password,
  });
  return response.data;
}

async function signOut(): Promise<string> {
  const response = await api.get<string>('profile/logout');

  return response.data;
}

export const authApi = {
  signIn,
  signOut,
};
