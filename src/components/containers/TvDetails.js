import React from 'react';
import { GridItem } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import Loader from '../shared/Loader';
import Error from '../shared/Error';
import CardDetails from '../shared/CardDetailsTv';
import useTvDetails from '../hooks/useTvDetails';

const TvDetails = () => {
  const { tvId } = useParams();
  const { data: tvshow, isLoading, isError } = useTvDetails(tvId);

  const renderDetails = () => {
    if (isError) return <Error />;

    return (
      <>
        {
          isLoading ? <GridItem colSpan={5} className="my-5"><Loader /></GridItem>
            : (
              <CardDetails
                id={tvshow.id}
                name={tvshow.original_name}
                img={`https://image.tmdb.org/t/p/w500/${tvshow.poster_path}`}
                loading={isLoading}
                popularity={tvshow.vote_average}
                genres={tvshow.genres}
                time={tvshow.episode_run_time}
                tagline={tvshow.tagline}
                overview={tvshow.overview}
                status={tvshow.status}
                firstDate={tvshow.first_air_date}
                episodes={tvshow.number_of_episodes}
                seasons={tvshow.number_of_seasons}
              />
            )
        }
      </>
    );
  };

  return renderDetails();
};

export default TvDetails;
