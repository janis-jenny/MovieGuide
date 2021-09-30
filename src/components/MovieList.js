/* eslint-disable camelcase */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchMovie from '../redux/actions/actionCreators';

const MovieList = () => {
  const movies = useSelector((state) => state.allMovies.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovie());
  }, []);

  return (
    <div className="container">
      <div className="row d-flex">
        <div className="col-4">
          {movies.map((item) => (
            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`} alt="poster" />))}
        </div>
        <ul className="col-8">
          {movies.map((item) => (
            <li key={item.id}>
              <h4>{item.title}</h4>
              <p>{item.overview}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default MovieList;
