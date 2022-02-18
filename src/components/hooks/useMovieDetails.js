/* eslint-disable */
import { useQuery } from 'react-query';
import { BASE_URL, API_KEY } from '../../Api';

const useMovieDetails = (movieId) => useQuery(
  ['movie-detail', { movieId }], async () => {
    const { data } = await BASE_URL.get(`/movie/${movieId}?api_key=${API_KEY}`);
    return data;
  }, { enabled: !!movieId },
);

export default useMovieDetails;
