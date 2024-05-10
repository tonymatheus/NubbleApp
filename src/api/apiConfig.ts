import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer Mg.hX2dkP5DeJhlRix3eDbkPlGGIBQ5WuCfynOZiKOz65UHKf93P8d7I2ecXYQ9',
  },
});
