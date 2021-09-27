import * as ActionTypes from './action-types';

const searchMovie = (payload) => ({
  type: ActionTypes.SEARCH_MOVIE,
  payload,
});

const updateMovies = (payload) => ({
  type: ActionTypes.SEARCH_MOVIE,
  payload,
});

const getCategories = (categories) => ({
  type: ActionTypes.SEARCH_MOVIE,
  payload: categories,
});

export { searchMovie, updateMovies, getCategories };
