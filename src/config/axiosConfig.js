import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://bukkyomo-questioner.herokuapp.com/api/v1/'
});

export default instance;
