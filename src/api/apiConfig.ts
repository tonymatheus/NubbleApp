import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer NA.F6zvhk1eVTIgXIp1K0IjuiFqaqnuruDdcMKUz_kxb3SpB19Yp3E1eCmc9l2b',
  },
});
