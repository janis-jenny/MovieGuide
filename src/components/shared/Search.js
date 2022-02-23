/* eslint-disable */
/* import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'; /// ok for useQuery?
import { fetchMovie } from '../../redux/actions/actionCreators';
//import useSearch from '../hooks/useSearchInput';

const SearchField = () => {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const navigation = (link) => {
    history.push(`/${link}`);
  };

  function searchHandler(e) {
    e.preventDefault();
    dispatch(fetchMovie(searchText.toLowerCase()));
  }

  return (
    <div className="d-flex justify-content-center py-5">
      <form className="d-flex" onSubmit={searchHandler}>
        <input className="form-control mx-0" type="text" placeholder="Search" id="searchInput" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        <button className="btn btn-secondary py-3 mx-0" type="submit" onClick={() => navigation('search')}>Search</button>
      </form>
    </div>
  );
};

export default SearchField;
 */