import './App.css';
import { Provider } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Counter } from './component/Counter';

// 리덕스 툴킷의 액션 크리에이터를 사용하여 리듀서 처리

// counterSlice 내보내기
export const counterSlice = createSlice({
  name: 'counterSlice',
  initialState: { value: 0 },
  reducers: {
    // 액션 함수에서 전달하는 데이터는 payload라는 이름으로 전달됨 
    // step -> payload
    up: (state, action) => {
      console.log(action);
      state.value = state.value + action.payload;
    }
  }
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
});

function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
  );
}

export default App;
