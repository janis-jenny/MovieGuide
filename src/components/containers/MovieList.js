import { Box, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchField from '../shared/Search';
import Loader from '../shared/Loader';
import Error from '../shared/Error';

const MovieList = () => {
  const { movies, error, loading } = useSelector((state) => state.allMoviesTVs);

  const renderMovies = () => {
    if (loading) {
      return (
        <GridItem colSpan={5} className="my-5">
          <Loader />
        </GridItem>
      );
    }
    if (error) return <Error />;

    return movies.filter((item) => item.media_type !== 'person' && item.title !== undefined && item.poster_path !== null).map((item) => (
      <Link to={`/movie/${item.id}`} id={item.id} className="row d-flex justify-content-center text-decoration-none text-black mx-0" key={item.id}>
        <div className="col-2 border rounded m-0 p-0">
          <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`} alt="poster" />
        </div>
        <ul className="col-8 border rounded m-0 p-0 content">
          <li>
            <h4 className="p-2">{item.title}</h4>
            <span className="p-2">{item.release_date}</span>
            <p className="paragraph px-2 my-3">{item.overview}</p>
          </li>
        </ul>
      </Link>
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
