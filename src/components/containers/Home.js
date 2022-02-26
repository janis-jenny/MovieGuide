import React, { useCallback, useState } from 'react';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import {
  TextField, Container, IconButton, InputAdornment,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useDebounce } from 'use-debounce';
import useSearch from '../hooks/useSearchInput';
import Loader from '../shared/Loader';
import Error from '../shared/Error';
import MovieList from './MovieList';

const Home = () => {
  const [searchText, setSearchText] = useState('');
  const [value] = useDebounce(searchText, 500);
  // helps to add a timer between key strokes events and avoids overload the memory
  // by calling the api on every letter, to optimize the performance, when fetching data from input,
  // it's gonna be in between a dynamic & static props to the function for fetching api
  const { data: movies, isLoading, isError } = useSearch(value);

  function searchHandler(e) {
    e.preventDefault();
    return movies;
  }

  const renderList = useCallback(
    () => {
      if (isLoading) return <GridItem colSpan={5} className="my-5"><Loader /></GridItem>;
      if (isError) return <Error />;

      return (
        <Grid container direction="row" justify="center" alignItems="center">
          {movies?.results.filter(
            (item) => item.media_type !== 'person' && item.title !== undefined && !!item.poster_path && !!item.backdrop_path,
          ).map(
            (item) => (
              <Grid key={item} item md={6}>
                <MovieList movies={item} />
              </Grid>
            ),
          )}
        </Grid>
      );
    }, [movies, isLoading, isError],
    // The first time the component is rendered, the useCallback hook will take the function
    // that is passed as its argument and stores it memory
    // so this hook use closure freezing what is inside, when render again
    // it will check the array dependecies to updated the values already store in memory,
    // this is closure in javascript
  );

  return (
    <>
      <Container>
        <form variant="standard" onSubmit={searchHandler} noValidate autoComplete="off" style={{ display: 'flex', justifyContent: 'center' }}>
          <TextField
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            label="Search"
            variant="standard"
            fullwidth
            required
            style={{ marginTop: 45, marginBottom: 40 }}
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton style={{ marginBottom: '20px', marginLeft: '40px' }}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </form>
      </Container>
      <Box width="60vw" mx="auto">
        <Grid
          templateColumns=" 1fr"
          gap={10}
        >
          {renderList()}
        </Grid>
      </Box>
    </>
  );
};

export default Home;

/*
-> Search box updates a stat var
-> On Click button, you will just redirect to movielist page along with search text ,
/movielist/:searchText
-> in movie list page, get searchtext from url and call api
*/
