import axios from 'axios';


const instance = axios.create({
    baseURL: 'localhost:8080',
    headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})