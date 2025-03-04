import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MTg.RvIYZVzU3BCpQjN1cXQvmgK7z_VsnRx3GIt6naB2mdha0j489pBTm81pINVH',
  },
});
