import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentblogId: null,
};

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    changeBlogId: (state, action) => {
        state.currentblogId = action.payload
    }
  },
});

export const { changeBlogId } = blogSlice.actions;
export default blogSlice.reducer;