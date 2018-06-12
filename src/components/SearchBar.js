import React from 'react';

const SearchBar = ({ search, handleSearchChange, handleSubmit }) =>
   (
    <div className="pa2">
      <input
        className="bw2 pa2 b--blue w-two-thirds-ns"
        type="search"
        placeholder="Search..."
        onChange={handleSearchChange}
      />
      <input
        disabled={!search}
        className="pa2 bw2 b--blue"
        type="submit"
        onClick={handleSubmit}
      />
    </div>
  )


export default SearchBar
