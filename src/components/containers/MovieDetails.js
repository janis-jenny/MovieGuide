/* eslint-disable */
import React from 'react';
import { GridItem } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import Loader from '../shared/Loader';
import Error from '../shared/Error';
import CardDetails from '../shared/CardDetailsMovie';
import useMovieDetails from '../hooks/useMovieDetails';

const MovieDetails = () => {
  const { movieId } = useParams();
  const { data: movie, isLoading, isError} = useMovieDetails(movieId);
  //const { movies, error, loading } = useSelector((state) => state.allMoviesTVs);
  // const dispatch = useDispatch();

  // el state global es llamado con el use selector vacio en el padre component 
  // y el details lo recibe asi luego el parent actualiza el state con use effect y vuelve a renderizar el details
  console.log('RENDER')
  /* useEffect(() => {
    if(!movieId) return
    console.log(movies);
    console.log("AQUI");
    dispatch(fetchDetailsMovie(movieId)); /// it is neccesary to clean up use effect here?
  }, [movieId]);
  */
  /* function timeConvert(num) {
    const hours = Math.floor(num / 60);
    const minutes = num % 60;
    return `${hours}:${minutes}`;
  }
  */
  const renderDetails = () => {
    if (isError) return <Error />;

    return (
      <>{
        isLoading? <GridItem colSpan={5} className="my-5"><Loader /></GridItem>
        :  <CardDetails
        id={movie.id}
        // bgimg={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movies.backdrop_path}`}
        name={movie.original_title}
        img={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
        loading={isLoading}
        date={movie.release_date}
        popularity={movie.vote_average}
        genres={movie.genres}
        time={movie.runtime}
        tagline={movie.tagline}
        overview={movie.overview}
        status={movie.status}
        language={movie.original_language}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      }
      </>
    )
  };

  return renderDetails()
};

export default MovieDetails;
