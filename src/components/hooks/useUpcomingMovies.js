/* eslint-disable */
import { useQuery } from 'react-query';
import { BASE_URL, API_KEY } from '../../Api';

const useUpcoming = (pageNumber) => useQuery(
    ['upcoming-movies', { pageNumber }], async () => {
        const { data } = await BASE_URL.get(`/movie/upcoming?api_key=${API_KEY}&page=${pageNumber}`);
        return data;
    }, 
    {
        keepPreviousData: true, staleTime: 5000
        // to avoid the ui jumps in & out of the success of loading states, 
        // cause each page is trigger like a new query //react query will mantain the data from the last fetch
        // while the new data is being requested even query key has changed
        // When the new data arrives, the previous data is seamlessly swapped to show the new data.
    }
);

export default useUpcoming;