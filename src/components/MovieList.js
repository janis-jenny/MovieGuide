/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchMovie from '../redux/actions/action-creators';

const MovieList = () => {
  const movies = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovie());
  }, []);

  console.log('Movies: ', movies);
  return (
    <div>
      <div>
        <h2>
          MovieList
        </h2>
      </div>
    </div>
  );
};
export default MovieList;
