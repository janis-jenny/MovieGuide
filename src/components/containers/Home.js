import React, { useCallback, useState } from 'react';
// import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import useSearch from '../hooks/useSearchInput';
import Loader from '../shared/Loader';
import Error from '../shared/Error';

const Home = () => {
  // const { error, loading } = useSelector((state) => state.allMoviesTVs);
  const [searchText, setSearchText] = useState('');
  const { data: movies, isLoading, isError } = useSearch(searchText);
  const history = useHistory();

  const navigation = (link) => {
    history.push(`/${link}`);
  };

  function searchHandler(e) {
    e.preventDefault();
    return movies;
  }

  const renderList = useCallback(
    () => {
      if (isLoading) return <GridItem colSpan={5} className="my-5"><Loader /></GridItem>;
      if (isError) return <Error />;

      return movies.filter((item) => item.media_type !== 'person' && item.title !== undefined && !!item.poster_path).map((item) => (
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
    },
  );

  return (
    <>
      <div className="d-flex justify-content-center py-5">
        <form className="d-flex" onSubmit={searchHandler}>
          <input className="form-control mx-0" type="text" placeholder="Search" id="searchInput" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
          <button className="btn btn-secondary py-3 mx-0" type="submit" onClick={() => navigation('search')}>Search</button>
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
