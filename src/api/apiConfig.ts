import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MTQ.MI0k31QHPwAO0p4Db06KFqrdM4q6CdqgNNx_aThUEUiTf_qtx00RLAioJ524',
  },
});
