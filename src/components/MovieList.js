/* eslint-disable camelcase */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchMovie from '../redux/actions/actionCreators';

const MovieList = () => {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovie());
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-2">{JSON.stringify(movies)}</div>

      </div>
    </div>
  );
};
export default MovieList;
