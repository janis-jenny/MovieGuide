/* eslint-disable */
import { useQuery } from 'react-query';
import { BASE_URL, API_KEY } from '../../utils/Api';

const useTvDetails = (tvId) => useQuery(
  ['tvshow-detail', { tvId }], async () => {
    const { data } = await BASE_URL.get(`/tv/${tvId}?api_key=${API_KEY}`);
    return data;
  }, { enabled: !!tvId },  // The query will not execute until the tvId exists
);

export default useTvDetails;
