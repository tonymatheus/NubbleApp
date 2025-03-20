import {User, UserAPI} from '../User/userTypes';

export interface AuthCredentials {
  token: string;
  user: User;
}

export interface AuthCredentialsAPI {
  auth: {
    type: string; //'bearer'
    token: string; //Mw.ynZlyFn4CgeRXQoVLbaMttls22vNzc7-MSoDEDGTgv6J4e3mD43MyO7a0wR9
  };
  user: UserAPI;
}

export interface SignInData {
  username?: string;
  email?: string;
  password: string;
}
