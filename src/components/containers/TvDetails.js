/* eslint-disable */
import React from 'react';
import { GridItem } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import Loader from '../shared/Loader';
import Error from '../shared/Error';
import CardDetails from '../shared/CardDetails';
import useTvDetails from '../hooks/useTvDetails';

const TvDetails = () => {
  const { tvId } = useParams();
  const { data: tvshow, isLoading, isError} = useTvDetails(tvId);

  const renderDetails = () => {
    if (isError) return <Error />;

    return (
      <>{
        isLoading? <GridItem colSpan={5} className="my-5"><Loader /></GridItem>
        :  <CardDetails
        id={tvshow.id}
        // bgimg={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movies.backdrop_path}`}
        name={tvshow.original_title}
        img={`https://www.themoviedb.org/t/p/w220_and_h330_face/${tvshow.poster_path}`}
        loading={isLoading}
        date={tvshow.release_date}
        popularity={tvshow.vote_average}
        genres={tvshow.genres}
        time={tvshow.runtime}
        tagline={tvshow.tagline}
        overview={tvshow.overview}
        status={tvshow.status}
        language={tvshow.original_language}
        budget={tvshow.budget}
        revenue={tvshow.revenue}
      />
      }
      </>
    )
  };

  return renderDetails()
};

export default TvDetails;