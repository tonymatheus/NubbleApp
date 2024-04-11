import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MTM.DqX8DaVSsYrKOObV58hdRW6FBq82j5pLblpafMiNzhnwgz72vprjXnGGiSP6',
  },
});
