import { FETCH_MOVIE_REQUEST, FETCH_MOVIE_SUCCCESS, FETCH_MOVIE_ERROR } from './actionTypes';

export const movieSearchRequest = () => ({
  type: FETCH_MOVIE_REQUEST,
});

export const movieSearchSuccess = (data) => ({
  type: FETCH_MOVIE_SUCCCESS,
  payload: data,
});

export const movieSearchError = (error) => ({
  type: FETCH_MOVIE_ERROR,
  payload: error,
});
