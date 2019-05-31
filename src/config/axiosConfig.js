import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://bukkyomo-questioner.herokuapp.com/api/v1/'
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    // eslint-disable-next-line no-param-reassign
    config.headers.token = token;
  }
  return config;
});
export default instance;
