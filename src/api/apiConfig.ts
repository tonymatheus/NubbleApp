import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MTc.aesGQMcwCrarcKPPQnAVwOdVRsUS68FutZWr5LXCVtfxwN4T5Sk0-gvLy4ET',
  },
});
