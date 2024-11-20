import axios from 'axios';

const api = axios.create({
  baseURL: `https://api.github.com/search/repositories?q=react`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;