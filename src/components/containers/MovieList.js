import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchMovie from '../../redux/actions/actionCreators';
import SearchField from '../shared/Search';

const MovieList = () => {
  const movies = useSelector((state) => state.allMovies.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovie());
  }, []);

  // if (item.media_type === 'movie' && item.media_type === 'tv')
  const listMarkUp = movies.map((item) => (
    <div className="row d-flex" key={item.id}>
      <div className="col-4">
        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`} alt="poster" />
      </div>
      <ul className="col-8">
        <li>
          <h4>{item.title}</h4>
          <p>{item.overview}</p>
        </li>
      </ul>
    </div>
  ));

  return (
    <div>
      <SearchField />
      <div className="container">{listMarkUp}</div>
    </div>
  );
};

export default MovieList;
