import React from 'react';

const ButtonListItem = props => {
  const changeColor = e => {
    // Do something with the color
    e.preventDefault();
    props.changeColor(props.color.toLowerCase());
  };

  return (
    <li>
      <button onClick={changeColor}>{props.color}</button>
      {/* <a href="#" onClick={changeColor}>
        {props.color}
      </a> */}
    </li>
  );
};

export default ButtonListItem;
