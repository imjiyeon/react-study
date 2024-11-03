import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  member: null,
};

const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    loginSuccess: (state, { payload: member }) => {
      state.member = member;
    },
    logoutSuccess: (state) => {
      state.member = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
  },
});

export const { loginSuccess, logoutSuccess } = memberSlice.actions;

export default memberSlice.reducer;
