import axios from 'axios';

const apiService = axios.create({
  baseURL: "http://localhost:8080",
  //baseURL: "https://url-shortener-rest-api.herokuapp.com",
  headers: {
    "Content-Type": "application/json"
  }
});
export default apiService;