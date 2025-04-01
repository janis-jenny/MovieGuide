import axios from 'axios';

const BASE_URL = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});
/* eslint-disable  prefer-destructuring */
const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
console.log("API KEY:", API_KEY);
export { BASE_URL, API_KEY };
