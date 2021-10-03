/* eslint-disable no-console */
import { BASE_URL, API_KEY } from '../../Api';
import * as action from './index';

require('dotenv').config();

const fetchMovie = (searchInput) => async (dispatch) => {
  dispatch(action.movieSearchRequest());

  try {
    const response = await BASE_URL.get(`/search/multi?api_key=${API_KEY}&query=${searchInput}`);
    console.log(response.data.results);
    dispatch(action.movieSearchSuccess(response.data.results));
  } catch (error) {
    dispatch(action.movieSearchError(error));
  }
};

export default fetchMovie;
