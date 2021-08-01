import React from 'react';

import AllStrings from '../../data/AllStrings';

import './BanjoGrid.scss';

const BanjoGrid = () => {
  const gridSquares = AllStrings.map((string) => {
    // console.log(string);
    return string.tabs.map((tab) => {
      if (tab.tab === '0' || string.string === 0 || (tab.tab === 5 && string.string === 5)) {
        return <div className={`banjo-grid__square string-${string.string} tab-${tab.tab}`}>{tab.noteName}</div>;
      }
      return (
        <div className={`banjo-grid__square string-${string.string} tab-${tab.tab}`}>
          <div className="note-circle">{tab.noteName}</div>
        </div>
      );
    });
  });

  return <div className="banjo-grid">{gridSquares}</div>;
};

export default BanjoGrid;
