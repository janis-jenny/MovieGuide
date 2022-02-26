/* eslint-disable */
import { Box, Text, Grid } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({movies}) => (

    <Grid container direction="row" justify="center" alignItems="center">
      <Link 
        to={`/movie/${movies.id}`}
        id={movies.id}
        key={movies.id}
        
      >
        <Grid item md={4}>
          <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movies.poster_path}`} alt="poster" />
        </Grid>
        <Grid item md={8}>
          <Box>
            <Box textAlign="center" mt="25">
              <Text textAlign="center" fontSize="lg" fontWeight="bolder">
                {movies.title}
              </Text>
            </Box>
            <Box textAlign="center" mt="25">
              <Text textAlign="center" fontSize="lg" fontWeight="bolder">
                {movies.release}
              </Text>
            </Box>
            <Box textAlign="center" mt="25">
              <Text textAlign="center" fontSize="lg" fontWeight="bolder">
                {movies.overview}
              </Text>
            </Box>
          </Box>
        </Grid>
      </Link>
    </Grid>
)

export default MovieList;
