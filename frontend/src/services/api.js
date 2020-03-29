import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-bethehero-pedronex.herokuapp.com',
});

export default api;
