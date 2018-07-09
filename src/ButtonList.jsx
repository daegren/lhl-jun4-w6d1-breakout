import React from 'react';
import ButtonListItem from './ButtonListItem.jsx';

const ButtonList = props => {
  const changeColor = color => e => {
    // Do something with the color
    props.changeColor(color);
  };

  return (
    <ul className="button-list">
      {props.colors.map(color => (
        <ButtonListItem
          key={color}
          color={color}
          changeColor={props.changeColor}
        />
      ))}
    </ul>
  );
};

export default ButtonList;
