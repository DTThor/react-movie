import React from 'react';

const SearchBar = ({ search, status, onSearchChange, onSubmit, onCancel }) =>
   (
    <div className="pa2 w-100">
      <form onSubmit={onSubmit}>
        <input
          className="input-reset outline-0 bw2 pa2 b--blue w-50-ns"
          value={search}
          type="search"
          placeholder="Search..."
          onChange={onSearchChange}
        />
        <input
          disabled={!search || status === 'Loading...'}
          className="input-reset pa2 bw2 b--blue"
          type="submit"
          onClick={onSubmit}
        />
        <input
          disabled={!search}
          className="input-reset pa2 bw2 b--red"
          type="button"
          value="Clear"
          onClick={onCancel}
        />
      </form>
    </div>
  )


export default SearchBar
