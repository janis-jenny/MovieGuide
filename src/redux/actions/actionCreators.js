/* eslint-disable no-console */
import { BASE_URL, API_KEY } from '../../Api';
import * as action from './index';

require('dotenv').config();

export const fetchPopularTvShows = () => async (dispatch) => {
  try {
    dispatch(action.movieSearchRequest());
    const response = await BASE_URL.get(`/tv/popular?api_key=${API_KEY}&page=1`);
    console.log(response.data.results);
    dispatch(action.movieSearchSuccess(response.data.results));
  } catch (error) {
    dispatch(action.movieSearchError(error));
  }
};

export const fetchTopRatedShows = () => async (dispatch) => {
  try {
    dispatch(action.movieSearchRequest());
    const response = await BASE_URL.get(`/tv/top_rated?api_key=${API_KEY}&page=1`);
    console.log(response.data.results);
    dispatch(action.movieSearchSuccess(response.data.results));
  } catch (error) {
    dispatch(action.movieSearchError(error));
  }
};

const fetchPopularMovie = () => async (dispatch) => {
  try {
    dispatch(action.movieSearchRequest());
    const response = await BASE_URL.get(`/movie/popular?api_key=${API_KEY}&page=1`);
    console.log(response.data.results);
    dispatch(action.movieSearchSuccess(response.data.results));
  } catch (error) {
    dispatch(action.movieSearchError(error));
  }
};

export const fetchUpcomingMovie = () => async (dispatch) => {
  try {
    dispatch(action.movieSearchRequest());
    const response = await BASE_URL.get(`/movie/upcoming?api_key=${API_KEY}&page=1`);
    console.log(response.data.results);
    dispatch(action.movieSearchSuccess(response.data.results));
  } catch (error) {
    dispatch(action.movieSearchError(error));
  }
};

export const fetchMovie = (searchInput) => async (dispatch) => {
  try {
    dispatch(action.movieSearchRequest());
    const response = await BASE_URL.get(`/search/multi?api_key=${API_KEY}&query=${searchInput}`);
    console.log(response.data.results);
    dispatch(action.movieSearchSuccess(response.data.results));
  } catch (error) {
    dispatch(action.movieSearchError(error));
  }
};

export default fetchPopularMovie;
