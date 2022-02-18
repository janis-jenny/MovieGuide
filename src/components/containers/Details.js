/* eslint-disable */
import React from 'react';
import { GridItem } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
// import { fetchDetailsMovie } from '../../redux/actions/actionCreators';
import Loader from '../shared/Loader';
import Error from '../shared/Error';
import CardDetails from '../shared/CardDetails';
import { useQuery } from 'react-query';
import { BASE_URL, API_KEY } from '../../Api';

const Details = () => {
  const { movieId } = useParams();
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
  const { data: movies, isLoading, isError} = useQuery(["movie-detail", {movieId: movieId}], async () => {
    const { data } = await BASE_URL.get(`/movie/${movieId}?api_key=${API_KEY}`);
    return data;
  }, { enabled: movieId!=undefined && movieId!=null}); // !!movieId
  
  const renderDetails = () => {
    if (isError) return <Error />;

    return (
      <>{
        isLoading? <GridItem colSpan={5} className="my-5">
                    <Loader />
                   </GridItem>
        :  <CardDetails
        id={movies.id}
        // bgimg={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movies.backdrop_path}`}
        name={movies.original_title}
        img={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movies.poster_path}`}
        loading={isLoading}
        date={movies.release_date}
        popularity={movies.vote_average}
        genres={movies.genres}
        time={movies.runtime}
        tagline={movies.tagline}
        overview={movies.overview}
        status={movies.status}
        language={movies.original_language}
        budget={movies.budget}
        revenue={movies.revenue}
      />
      }
      </>
    )
  };

  return renderDetails()
};

export default Details;
