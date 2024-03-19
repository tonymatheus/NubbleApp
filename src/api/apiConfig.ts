import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer OQ.Kyirs8zCQvsc-FtoekGJJwALLiiLWsYk6Y6Vsl6vq4JDi6ttqH0rh38Ir5hl',
  },
});
