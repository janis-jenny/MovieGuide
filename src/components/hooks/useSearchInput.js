/* eslint-disable */
import { useQuery } from 'react-query';
import { BASE_URL, API_KEY } from '../../Api';


const useSearch = (searchInput) => useQuery(
    ['search', { searchInput }], async () => {
        const { data } = await BASE_URL.get(`/search/multi?api_key=${API_KEY}&query=${searchInput}`);
        return data;
    },
    {
        keepPreviousData: true, staleTime: 5000, enabled:searchInput.trim() !== "" // -> enable the search when there is a text w no spaces and where is not empty
        // to avoid the ui jumps in & out of the success of loading states, 
        // cause each page is trigger like a new query //react query will mantain the data from the last fetch
        // while the new data is being requested even query key has changed
        // When the new data arrives, the previous data is seamlessly swapped to show the new data.
    }
);

export default useSearch;