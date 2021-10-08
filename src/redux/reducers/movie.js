import * as ActionTypes from '../actions/actionTypes';

const initialState = {
  movies: [],
  loading: false,
  error: null,
};

const movieTvReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_REQUEST:
      return { ...state, loading: true, error: null };
    case ActionTypes.FETCH_SUCCCESS:
      return { ...state, loading: false, movies: payload };
    case ActionTypes.FETCH_ERROR:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

export default movieTvReducers;
