/* eslint-disable */
import { useQuery } from 'react-query';
import { BASE_URL, API_KEY } from '../../Api';

const useMovieDetails = (tvId) => useQuery(
  ['tvshow-detail', { tvId }], async () => {
    const { data } = await BASE_URL.get(`/tv/${tvId}?api_key=${API_KEY}`);
    return data;
  }, { enabled: !!tvId },
);

export default useMovieDetails;
