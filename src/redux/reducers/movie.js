import * as ActionTypes from '../actions/action-types';

const initialState = {
  movies: [],
  categories: [],
};

const movieReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SEARCH_MOVIE:
      return { ...state, movies: payload };
    case ActionTypes.FETCH_MOVIE:
      return { ...state, movies: payload };
    default:
      return state;
  }
};

export default movieReducers;
