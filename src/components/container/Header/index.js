import React from 'react';

import Header from './Header';

export default (props) => {
  return (
    <Header
      stats={props.stats}
      statsName={props.statsName}
      color={props.color}
    />
  );
};
