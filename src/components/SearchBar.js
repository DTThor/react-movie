import React from 'react';

const SearchBar = ({ searchfield, searchChange }) =>
   (
    <div className="pa2">
      <input
        className="bw2 pa2 b--blue w-two-thirds-ns"
        type="search"
        placeholder="Search (filter) Movies!"
        onChange={searchChange}
      />
    </div>
  )


export default SearchBar
