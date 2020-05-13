import React from 'react';

import LoginContainer from './LoginContainer';

export default (props) => {
  return (
    <LoginContainer
      stats={props.stats}
      statsName={props.statsName}
      color={props.color}
    />
  );
};
