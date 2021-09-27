import * as ActionTypes from '../actions/action-types';

const initialState = {
  movies: [{
    id: 24428,
    title: 'The Avengers',
    genres: [
      {
        id: 18,
        name: 'Drama',
      },
    ],
  }],
  categories: [],
};

const movieReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SEARCH_MOVIE:
      return { ...state, searchmovie: payload };
    default:
      return state;
  }
};

export default movieReducers;
