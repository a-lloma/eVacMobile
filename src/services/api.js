import axios from 'axios';

const api = axios.create({
  baseURL: 'http://jota.com.br',
});

export default api;
