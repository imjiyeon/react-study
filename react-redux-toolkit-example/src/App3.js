import './App.css';
import {Provider, useSelector, useDispatch} from 'react-redux';
import {configureStore, createSlice} from '@reduxjs/toolkit';

// 리덕스 툴킷의 액션 크리에이터를 사용하여 리듀서 처리

const counterSlice = createSlice({
  name: 'counterSlice',
  initialState:{value:0},
  reducers:{
    // 액션의 데이는 payload라는 이름으로 전달됨
    up: (state, action) => {
      console.log(action);
      // 상태값을 step에서 payload로 변경
      state.value = state.value + action.payload;
    }
  }
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
});

function Counter(){

  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.counter.value
  });

  return (
    <div>
      <button onClick={()=>{
        // dispatch({type:'counterSlice/up', step:2});
        // 리덕스 툴킷에서는 슬라이스에서 자동으로 액션 함수를 생성
        // type을 지정할 필요없이 up 함수 바로 호출 가능
        // 상태값(step)은 함수의 인자로 전달
        dispatch(counterSlice.actions.up(2));
      }} >+</button> {count}
    </div>
  );
}

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
