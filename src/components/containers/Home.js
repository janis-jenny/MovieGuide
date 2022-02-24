import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import { useDebounce } from 'use-debounce';
import useSearch from '../hooks/useSearchInput';
import Loader from '../shared/Loader';
import Error from '../shared/Error';

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

      return movies?.results.filter((item) => item.media_type !== 'person' && item.title !== undefined && !!item.poster_path).map((item) => (
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
    }, [movies, isLoading, isError],
    // The first time the component is rendered, the useCallback hook will take the function
    // that is passed as its argument and stores it memory
    // so this hook use closure freezing what is inside, when render again
    // it will check the array dependecies to updated the values already store in memory,
    // this is closure in javascript
  );

  return (
    <>
      <div className="d-flex justify-content-center py-5">
        <form className="d-flex" onSubmit={searchHandler}>
          <input className="form-control mx-0" type="text" placeholder="Search" id="searchInput" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        </form>
      </div>
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
