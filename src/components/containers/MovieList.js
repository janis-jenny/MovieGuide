import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchMovie from '../../redux/actions/actionCreators';
import SearchField from '../shared/Search';
import Loader from '../shared/Loader';
import Error from '../shared/Error';

const MovieList = () => {
  const { movies, error, loading } = useSelector((state) => state.allMovies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovie());
  }, []);

  // if (item.media_type === 'movie' && item.media_type === 'tv')
  const renderMovies = () => {
    if (loading) return <Loader />;
    if (error) return <Error />;

    return movies.filter((item) => item.media_type !== 'person').map((item) => (
      <div className="row d-flex" key={item.id}>
        <div className="col-4">
          <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`} alt="poster" />
        </div>
        <ul className="col-8">
          <li>
            <h4>{item.title}</h4>
            <span>{item.release_date}</span>
            <p>{item.overview}</p>
          </li>
        </ul>
      </div>
    ));
  };

  return (
    <>
      <SearchField />
      <div className="container">{renderMovies()}</div>
    </>
  );
};

export default MovieList;
