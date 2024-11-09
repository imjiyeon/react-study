import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  member: null,
};

export const memberSlice = createSlice({
  name: "memberSlice",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.member = action.payload;
    },
    logoutSuccess: (state) => {
      state.member = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
  },
});

// 액션함수
export const { loginSuccess, logoutSuccess } = memberSlice.actions;
