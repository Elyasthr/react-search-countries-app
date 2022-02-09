import React from 'react';
import SearchBar from './Searchbar';
import SearchRegion from './SearchRegion';

const Search = ({onChange,onChanger}) => {
  return (
    <div>
      <SearchBar onChanger={onChanger} />
      <SearchRegion onChange={onChange}/> 
    </div>
  );
};

export default Search;