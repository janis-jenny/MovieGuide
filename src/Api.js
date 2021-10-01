import axios from 'axios';

require('dotenv').config();

const BASE_URL = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});
/* eslint-disable  prefer-destructuring */
const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
// const API_KEY = 3694c3d2467f000d4597dfc9c1c650b8;

export { BASE_URL, API_KEY };
