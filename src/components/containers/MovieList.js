/* eslint-disable */
import { Box, Grid } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({id, poster, title, release, overview}) => (
  <Box width="60vw" mx="auto">
    <Grid
      templateColumns=" 1fr"
      gap={10}
    >
      <Link to={`/movie/${id}`} id={id} className="row d-flex justify-content-center text-decoration-none text-black mx-0" key={id}>
          <div className="col-2 border rounded m-0 p-0">
            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${poster}`} alt="poster" />
          </div>
          <ul className="col-8 border rounded m-0 p-0 content">
            <li>
              <h4 className="p-2">{title}</h4>
              <span className="p-2">{release}</span>
              <p className="paragraph px-2 my-3">{overview}</p>
            </li>
          </ul>
        </Link>
    </Grid>
  </Box>
)

export default MovieList;
