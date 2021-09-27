/* eslint-disable import/named */
import { combineReducers } from 'redux';
import movieReducers from './movie';

const reducers = combineReducers({
  movies: movieReducers,
});

export default reducers;
