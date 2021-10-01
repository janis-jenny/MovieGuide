/* eslint-disable no-console */
import { BASE_URL, API_KEY } from '../../Api';
import * as action from './index';

require('dotenv').config();

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
    const response = await BASE_URL.get(`/search/movie?api_key=${API_KEY}&query=avengers`);
    // console.log(response.data.results);
    dispatch(action.movieSearchSuccess(response.data.results));
  } catch (error) {
    dispatch(action.movieSearchError(error));
  }
};

export default fetchMovie;
