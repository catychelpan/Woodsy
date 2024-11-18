import axios from 'axios';


const instance = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})


instance.interceptors.request.use(
  config => {
      console.log('Making request to:', config.baseURL + config.url);
      return config;
  },
  error => {
      console.error('Request error:', error);
      return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
      return response;
  },
  error => {
      if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error('Response error data:', error.response.data);
          console.error('Response error status:', error.response.status);
      } else if (error.request) {
          // The request was made but no response was received
          console.error('No response received:', error.request);
      } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error setting up request:', error.message);
      }
      return Promise.reject(error);
  }
);

export default instance