import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MQ.SqF8WVbtLo-NOezHVjzZ9joE3M7LIRlXgeKYIrU_QEp9U3HQTcu7iBjJ6048',
  },
});
