import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeColor } from './colorSlice';

const RandomColor = () => {
  const color = useSelector((state) => state.color.color);
  const colorHistory = useSelector((state) => state.color.colorHistory);
  const dispatch = useDispatch();

  const handleChangeColor = () => {
    dispatch(changeColor());
  };

  return (
    <div>
      <h2>Random Color</h2>
      <button onClick={handleChangeColor}>Change Background Color</button>
      <div>Current Color: {color}</div>
      <div>Color History: {colorHistory.join(', ')}</div>
    </div>
  );
};

export default RandomColor;
