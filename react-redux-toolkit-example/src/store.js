import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
});

// store 내보내기
export default store;