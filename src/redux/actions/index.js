import { FETCH_REQUEST, FETCH_SUCCCESS, FETCH_ERROR } from './actionTypes';

export const movieSearchRequest = () => ({
  type: FETCH_REQUEST,
});

export const movieSearchSuccess = (data) => ({
  type: FETCH_SUCCCESS,
  payload: data,
});

export const movieSearchError = (error) => ({
  type: FETCH_ERROR,
  payload: error,
});
