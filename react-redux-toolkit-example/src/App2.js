import './App.css';
import {Provider, useSelector, useDispatch} from 'react-redux';
// redux toolkit 에서 configureStore, createSlice 함수 가져오기
import {configureStore, createSlice} from '@reduxjs/toolkit';

// 슬라이스를 사용하여 카운터 기능 구현하기

// redux toolkit이란? redux를 저 뒷벡 사용할 수 있도록 도와주는 도구
// 슬라이스라는 작은 스토어 단위를 제공, 상태 불변성 관리할 필요 없음
// 리덕스 툴킷 설치 명령: @reduxjs/toolkit

// 슬라이스 생성
// 슬라이스: 기능별로 사용하는 작은 스토어 단위
// 슬라이스 이름, 상태 초기값, 리듀서 설정
const counterSlice = createSlice({
  name: 'counterSlice',
  initialState : { value : 0 },
  // 액션타입별로 리듀서를 정의
  reducers:{
    // up 액션이 발생하면 value값이 증가됨
    up: (state, action) => {
      state.value = state.value + action.step;
    }
  }
});

// 슬라이스들을 모아서 스토어 생성
// configureStore를 사용하여 여러 슬라이스의 리듀서를 조합할 수 있음
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
});

// 필요 없는 코드 제거
// 기존에 사용한 리듀서와 초기 상태는 redux toolkit으로 교체됨
// function reducer(state, action){
//   if(action.type==='up'){
//     return {...state, value: state.value + action.step};
//   }
//   return state;
// }
// const initState = {value:0};
// const store = createStore(reducer, initState);

// 상태를 출력하고, 버튼을 클릭하면 상태값이 변경됨
function Counter(){

  const dispatch = useDispatch();

  // 현재 상태에서 counter 슬라이스의 value 값 가져오기
  // counter는 counterSlice의 초기값
  const count = useSelector((state) => {
    console.log(state); // counter 객체가 출력됨
    return state.counter.value // counter 슬라이스에서 value 상태 반환
  });

  return (
    // dispatch에서 타입을 수정 (슬라이스 이름과 액션을 함께 지정)
    <div>
      <button onClick={()=>{
        dispatch({type:'counterSlice/up', step:2});
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
