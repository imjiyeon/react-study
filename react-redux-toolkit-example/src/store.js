// 새로운 파일 생성하기

// configureStore import 부분 store 부분 코드 복사하기
import {configureStore} from '@reduxjs/toolkit';
// counterSlice 파일에서 counterSlice 가져오기
import counterSlice from './counterSlice';

const store = configureStore({
    reducer: {
      counter: counterSlice.reducer
    }
});

// store 내보내기
export default store;