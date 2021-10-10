import { BASE_URL, API_KEY } from '../../Api';
import * as action from './index';

require('dotenv').config();

export const fetchPopularTvShows = () => async (dispatch) => {
  try {
    dispatch(action.SearchRequest());
    const response = await BASE_URL.get(`/tv/popular?api_key=${API_KEY}&page=1`);
    dispatch(action.SearchSuccess(response.data.results));
  } catch (error) {
    dispatch(action.SearchError(error));
  }
};

export const fetchTopRatedShows = () => async (dispatch) => {
  try {
    dispatch(action.SearchRequest());
    const response = await BASE_URL.get(`/tv/top_rated?api_key=${API_KEY}&page=1`);
    dispatch(action.SearchSuccess(response.data.results));
  } catch (error) {
    dispatch(action.SearchError(error));
  }
};

const fetchPopularMovie = () => async (dispatch) => {
  try {
    dispatch(action.SearchRequest());
    const response = await BASE_URL.get(`/movie/popular?api_key=${API_KEY}&page=1`);
    dispatch(action.SearchSuccess(response.data.results));
  } catch (error) {
    dispatch(action.SearchError(error));
  }
};

export const fetchUpcomingMovie = () => async (dispatch) => {
  try {
    dispatch(action.SearchRequest());
    const response = await BASE_URL.get(`/movie/upcoming?api_key=${API_KEY}&page=1`);
    dispatch(action.SearchSuccess(response.data.results));
  } catch (error) {
    dispatch(action.SearchError(error));
  }
};

export const fetchMovie = (searchInput) => async (dispatch) => {
  try {
    dispatch(action.SearchRequest());
    const response = await BASE_URL.get(`/search/multi?api_key=${API_KEY}&query=${searchInput}`);
    dispatch(action.SearchSuccess(response.data.results));
  } catch (error) {
    dispatch(action.SearchError(error));
  }
};

export const fetchDetailsMovie = (movieId) => async (dispatch) => {
  try {
    dispatch(action.SearchRequest());
    const response = await BASE_URL.get(`/movie/${movieId}?api_key=${API_KEY}`);
    dispatch(action.SearchSuccess(response.data));
  } catch (error) {
    dispatch(action.SearchError(error));
  }
};

export default fetchPopularMovie;
