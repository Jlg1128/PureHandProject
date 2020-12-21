import axios from 'axios';

const config = {
  // baseURL: 'http://localhost:8089',
  timeout: 5000,
  'Content-Type': 'application/xml',
  'Access-Control-Allow-Origin': '*',
};

const axiosInstance = axios.create(config);
axiosInstance.interceptors.request.use((axiosConfig) => {
  console.log('💔💔💔💔💔💔💔💔');
  const token = sessionStorage.getItem('token');
  if (token) {
    // 判断是否存在token，如果存在的话，则每个http header都加上token
    // @ts-ignore
    axiosConfig.headers.Authorization = token;
  }
  return axiosConfig;
}, (error) => Promise.reject(error));
console.log(axios);

export default axiosInstance;
