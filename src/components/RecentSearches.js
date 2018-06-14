import React, { Component } from 'react';

const RecentSearches = ({ history, onClick, clearHistory }) =>
  (
    <div className='tc pa1 br3 ma0 bw2 shadow-2 bg-light-blue'>
      <h3 className='dib ph3'>Search History</h3>
      <button disabled={history.length===0} className='shadow-hover' onClick={clearHistory}>Clear History</button>
      <div>
        { history.length===0 && <p>Submit a search to start a history</p>}
        {
          history.map((title, i) => (
            <p key={i} className='underline-hover shadow-hover dib ph2 mt-0' onClick={onClick}>{title}</p>
          ))
        }
      </div>
    </div>

  )

export default RecentSearches
