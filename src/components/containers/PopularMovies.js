import { Box, Grid, GridItem } from '@chakra-ui/react';
import React, { useCallback, useState } from 'react';
/* import { useDispatch, useSelector } from 'react-redux';
import fetchPopularMovie from '../../redux/actions/actionCreators'; */
import usePopular from '../hooks/usePopularMovies';
import Loader from '../shared/Loader';
import Error from '../shared/Error';
import Card from '../shared/CardMovie';

const PopularMovies = () => {
/*   const { movies, error, loading } = useSelector((state) => state.allMoviesTVs);
  const dispatch = useDispatch(); */

  const [pageNumber, setPageNumber] = useState(1);
  const {
    data: movies, isError, isLoading, isPreviousData,
  } = usePopular(pageNumber);

  /* useEffect(() => {
    // console.log(movies);
    dispatch(fetchPopularMovie());
  }, []); */

  const renderMovies = useCallback(
    () => {
      if (isLoading) return <GridItem colSpan={5} className="my-5"><Loader /></GridItem>;
      if (isError) return <Error />;

      return movies.results.filter((item) => item.media_type !== 'person' && item.media_type !== 'tv' && item.title !== undefined
        && !!item.poster_path).map((item) => (
          <Card
            key={item.id}
            name={item.title}
            img={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`}
            loading={isLoading}
            date={item.release_date}
            popularity={item.vote_average}
            id={item.id}
          />
      ));
    },
  );

  return (
    <>
      <Box as="div" w="100%" bg="gray.200" p={5} minH="30vh" className="p-5">
        <Grid
          templateColumns="repeat(4, 1fr)"
          gap={20}
        >
          {renderMovies()}
        </Grid>
      </Box>
      <div>
        <button
          onClick={() => setPageNumber((page) => Math.max(page - 1, 1))}
          disabled={pageNumber === 1}
          type="button"
        >
          Button1
        </button>
        <span>
          {pageNumber}
        </span>
        <button
          onClick={() => setPageNumber(
            (page) => (!isPreviousData ? page + 1 : page),
          )}
          disabled={pageNumber === 5}
          type="button"
        >
          Button2
        </button>
      </div>
    </>
  );
};

export default PopularMovies;
