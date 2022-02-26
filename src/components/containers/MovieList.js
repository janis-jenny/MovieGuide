/* eslint-disable */
import { Box, Grid } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import movielistStyle from '../../style/movielist.module.css';

const MovieList = ({movies}) => (
  <Grid container direction="row" justify="center" alignItems="center" className={movielistStyle.movie_card}>
    <Link
      className={movielistStyle.link}
      to={`/movie/${movies.id}`}
      id={movies.id}
      key={movies.id} 
    >
      <Box className={movielistStyle.info_section}>
        <Box className={movielistStyle.movie_header}>
          <img className={movielistStyle.locandina} src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} alt="poster" />
          <h4>{movies.title}</h4>
          <h5>{movies.release_date}</h5>
          <span className={movielistStyle.minutes}>{movies.vote_average}</span>
        </Box>
        <Box className={movielistStyle.movie_desc}>
          <p className={movielistStyle.text}>{movies.overview}</p>
        </Box>
      </Box>
      <Box className={movielistStyle.blur_back}>
      <img src={`https://image.tmdb.org/t/p/w500/${movies.backdrop_path}`} />
      </Box>
    </Link>
  </Grid>
)

export default MovieList;
