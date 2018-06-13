import React, { Component } from 'react';

const RecentSearches = ({history}) =>
  (
    <div className='tc dib pa2 br3 ma0 bw2 shadow-2 bg-light-blue'>
      <h3>Last 5 Searches</h3>
      <div>
        {
          history.map((title, i) => (
            <p key={i}>{title}</p>
          ))
        }
        </div>
      </div>

  )

export default RecentSearches
