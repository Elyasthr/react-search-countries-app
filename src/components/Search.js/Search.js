import React from 'react';
import SearchBar from './Searchbar';
import SearchRegion from './SearchRegion';

const Search = ({onChange}) => {
  return (
    <div>
      <SearchBar />
      <SearchRegion onChange={onChange}/> 
    </div>
  );
};

export default Search;