import axios from 'axios';

const axiosClient = axios.create({
  baseURL : 'https://api.github.com/',
  headers : {"Content-Type": 'application/json'},
  timeout : 2000
});

export default axiosClient

