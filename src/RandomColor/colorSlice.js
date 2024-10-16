import { createSlice } from '@reduxjs/toolkit';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const colorSlice = createSlice({
  name: 'color',
  initialState: {
    color: '#FFFFFF',
    colorHistory: [],
  },
  reducers: {
    changeColor: (state) => {
      const newColor = getRandomColor();
      state.color = newColor;
      state.colorHistory.push(newColor);
    },
  },
});

export const { changeColor } = colorSlice.actions;
export default colorSlice.reducer;

