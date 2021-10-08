import { combineReducers } from 'redux';
import movieTvReducers from './movie';

const reducers = combineReducers({
  allMoviesTVs: movieTvReducers,
});

export default reducers;
