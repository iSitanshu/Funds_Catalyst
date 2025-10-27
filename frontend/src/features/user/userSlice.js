// src/features/user/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  usertoken: null,
  userInfo: null, // new field to store existing_user info
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // update the token only
    updateuserToken: (state, action) => {
      state.usertoken = action.payload;
    },
    // update the user info
    updateuserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    // update both token and info together
    setuserData: (state, action) => {
      const { token, userInfo } = action.payload;
      state.usertoken = token;
      state.userInfo = userInfo;
    },
    // clear user data (logout)
    clearuserData: (state) => {
      state.usertoken = null;
      state.userInfo = null;
    },
  },
});

export const { updateuserToken, updateuserInfo, setuserData, clearuserData } = userSlice.actions;
export default userSlice.reducer;
