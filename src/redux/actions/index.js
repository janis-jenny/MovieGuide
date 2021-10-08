import { FETCH_REQUEST, FETCH_SUCCCESS, FETCH_ERROR } from './actionTypes';

export const SearchRequest = () => ({
  type: FETCH_REQUEST,
});

export const SearchSuccess = (data) => ({
  type: FETCH_SUCCCESS,
  payload: data,
});

export const SearchError = (error) => ({
  type: FETCH_ERROR,
  payload: error,
});
