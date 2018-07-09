import React from 'react';

const ColoredHeader = props => {
  return <h1 style={{ color: props.color }}>{props.children}</h1>;
};

export default ColoredHeader;
