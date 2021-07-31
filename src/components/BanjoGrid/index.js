import React from 'react';

import AllStrings from '../../data/AllStrings';

import './BanjoGrid.scss';

const BanjoGrid = () => {
  const gridSquares = AllStrings.map((string) => {
    // console.log(string);
    return string.tabs.map((tab) => (
      <div className={`banjo-grid__square string-${string.string} tab-${tab.tab}`}>{tab.noteName}</div>
    ));
  });

  return <div className="banjo-grid">{gridSquares}</div>;
};

export default BanjoGrid;
