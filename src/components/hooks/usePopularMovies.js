/* eslint-disable */
import { useQuery } from 'react-query';
import { BASE_URL, API_KEY } from '../../Api';

const usePopular = (pageNumber) => useQuery(
    ['popular-movies', { pageNumber }], async () => {
        const { data } = await BASE_URL.get(`/movie/popular?api_key=${API_KEY}&page=${pageNumber}`);
        return data;
    }, {
        keepPreviousData: true,
    }
);

export default usePopular;