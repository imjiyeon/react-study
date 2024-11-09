import { configureStore } from "@reduxjs/toolkit";
import { memberSlice } from "./memberSlice";

// 스토어 생성
export const store = configureStore({
  reducer: {
    member: memberSlice.reducer,
  }
});

