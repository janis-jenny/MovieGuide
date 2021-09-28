/* eslint-disable no-console */
import api from '../../Api';
import * as ActionTypes from './action-types';

/* const searchMovie = (payload) => ({
  type: ActionTypes.SEARCH_MOVIE,
  payload,
});

const updateMovies = (payload) => ({
  type: ActionTypes.UPDATE_MOVIES,
  payload,
});

const getCategories = (categories) => ({
  type: ActionTypes.GET_CATEGORIES,
  payload: categories,
}); */

const fetchMovie = () => async (dispatch) => {
  const response = await api.get('/search/movie?api_key=3694c3d2467f000d4597dfc9c1c650b8&query=avengers');
  dispatch({
    type: ActionTypes.SEARCH_MOVIE,
    payload: response,
  });
};

export default fetchMovie;
