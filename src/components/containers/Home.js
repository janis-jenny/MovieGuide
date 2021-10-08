import React from 'react';
import { GridItem } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import SearchField from '../shared/Search';
import Loader from '../shared/Loader';
import Error from '../shared/Error';

const Home = () => {
  const { error, loading } = useSelector((state) => state.allMoviesTVs);

  const renderList = () => {
    if (loading) {
      return (
        <GridItem colSpan={5} className="my-5">
          <Loader />
        </GridItem>
      );
    }
    if (error) return <Error />;
    return null;
  };

  return (
    <div>
      <SearchField />
      {renderList()}
    </div>
  );
};

export default Home;
