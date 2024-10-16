import { createSlice } from '@reduxjs/toolkit';

export const imageSlice = createSlice({
  name: 'image',
  initialState: {
    image: null,
  },
  reducers: {
    searchImage: (state, action) => {
      // Mockup tìm hình ảnh
      state.image = `https://source.unsplash.com/random/200x200?${action.payload}`;
    },
  },
});

export const { searchImage } = imageSlice.actions;
export default imageSlice.reducer;
