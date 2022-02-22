import { BASE_URL, API_KEY } from '../../Api';
import * as action from './index';

require('dotenv').config();

export const fetchMovie = (searchInput) => async (dispatch) => {
  try {
    dispatch(action.SearchRequest());
    const response = await BASE_URL.get(`/search/multi?api_key=${API_KEY}&query=${searchInput}`);
    dispatch(action.SearchSuccess(response.data.results));
  } catch (error) {
    dispatch(action.SearchError(error));
  }
};

export default fetchMovie;
