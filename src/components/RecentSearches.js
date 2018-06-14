import React, { Component } from 'react';

const RecentSearches = ({ history, onClick, clearHistory }) =>
  (
    <div className='tc dib pa2 br3 ma0 bw2 shadow-2 bg-light-blue'>
      <h3>Last 5 Searches</h3>
      <button onClick={clearHistory}>Clear History</button>
      <div>
        {
          history.map((title, i) => (
            <p key={i} className='underline-hover shadow-hover' onClick={onClick}>{title}</p>
          ))
        }
        </div>
      </div>

  )

export default RecentSearches
