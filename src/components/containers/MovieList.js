import { Box, Grid, GridItem } from '@chakra-ui/react';
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

  const renderMovies = () => {
    if (loading) {
      return (
        <GridItem colSpan={5} className="my-5">
          <Loader />
        </GridItem>
      );
    }
    if (error) return <Error />;

    return movies.filter((item) => item.media_type !== 'person' && item.title !== undefined).map((item) => (
      <div className="row d-flex" key={item.id}>
        <div className="col-4">
          <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`} alt="poster" />
        </div>
        <ul className="col-8">
          <li>
            <h4>{item.title}</h4>
            <span>{item.release_date}</span>
            <p className="paragraph">{item.overview}</p>
          </li>
        </ul>
      </div>
    ));
  };

  return (
    <Box width="60vw" mx="auto">
      <SearchField />
      <Grid
        templateColumns=" 1fr"
        gap={10}
      >
        {renderMovies()}
      </Grid>
    </Box>
  );
};

export default MovieList;
