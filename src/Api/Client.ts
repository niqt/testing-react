import axios from 'axios';

const axiosClient = axios.create();

axiosClient.defaults.baseURL = 'https://api.github.com/';

axios.defaults.baseURL = 'https://api.github.com/';
axios.defaults.headers.common['Authorization'] = "";
axios.defaults.headers.post['Content-Type'] = 'application/json';

//All request will wait 2 seconds before timeout
axiosClient.defaults.timeout = 2000;

//axiosClient.defaults.withCredentials = true

export default function getRequest(url: string) {
  return axiosClient.get(`https://api.github.com${url}`).then(response => response);
}