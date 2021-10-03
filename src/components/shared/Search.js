import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import fetchMovie from '../../redux/actions/actionCreators';

const SearchField = () => {
  const [searchText, setSearchText] = useState('');
  // const [category, setCategory] = useState('')
  const dispatch = useDispatch();
  const history = useHistory();

  function searchHandler(e) {
    e.preventDefault();
    dispatch(fetchMovie(searchText.toLowerCase()));
    history.push('/search');
  }

  return (
    <div className="d-flex justify-content-center py-5">
      <form className="d-flex" onSubmit={searchHandler}>
        <input className="form-control mx-0" type="text" placeholder="Search" id="searchInput" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        <button className="btn btn-secondary py-3 mx-0" type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchField;
