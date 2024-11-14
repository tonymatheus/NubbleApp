import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MTM.fMq09JMTwKF7CvRpRrot5lmGpjF9KQ2neK2HV_e3byWo7k6KB2kRYPtwQCH3',
  },
});
