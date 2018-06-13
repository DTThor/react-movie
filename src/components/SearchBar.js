import React from 'react';

const SearchBar = ({ search, status, onSearchChange, onSubmit, onCancel }) =>
   (
    <div className="pa2 dib w-80">
      <input
        className="bw2 pa2 b--blue w-60-ns"
        value={search}
        type="search"
        placeholder="Search..."
        onChange={onSearchChange}
      />
      <input
        disabled={!search || status === 'Loading...'}
        className="pa2 bw2 b--blue"
        type="submit"
        onClick={onSubmit}
      />
      <input
        disabled={!search}
        className="pa2 bw2 b--red"
        type="button"
        value="Clear"
        onClick={onCancel}
      />
    </div>
  )


export default SearchBar
