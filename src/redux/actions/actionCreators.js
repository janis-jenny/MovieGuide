/* eslint-disable no-console */
import api from '../../Api';
import * as action from './index';

/* const searchMovie = (payload) => ({
  type: ActionTypes.SEARCH_MOVIE,
  payload,
});

const updateMovies = (payload) => ({
  type: ActionTypes.UPDATE_MOVIES,
  payload,
});

const getCategories = (categories) => ({
  type: Acti8onTypes.GET_CATEGORIES,
  payload: categories,
}); */

const fetchMovie = () => async (dispatch) => {
  // const cleanSearchMovie = searchMovie.trim().toLowerCase();${cleanSearchMovie}``
  dispatch(action.movieSearchRequest());
  try {
    const response = await api.get('/search/movie?api_key=3694c3d2467f000d4597dfc9c1c650b8&query=avengers');
    // console.log(response.data.results);
    dispatch(action.movieSearchSuccess(response.data.results));
  } catch (error) {
    dispatch(action.movieSearchError(error));
  }
};

export default fetchMovie;
