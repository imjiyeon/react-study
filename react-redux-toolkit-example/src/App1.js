import './App.css';
// redux 패키지에서 createStore 함수 가져오기
import {createStore} from 'redux';
// react-redux 패키지에서 Provider, useSelector, useDispatch 함수 가져오기
import {Provider, useSelector, useDispatch} from 'react-redux';

// + 버튼을 클릭하면 숫자가 증가되는 기능 구현하기

// redux와 react-redux 설치 명령: npm install redux react-redux

function Counter(){

  // 디스패처 가져오기
  const dispatch = useDispatch();

  // 스토어에서 value값 가져오기
  const count = useSelector(state => state.value);

  // 버튼을 클릭할 때마다 값이 2씩 증가하도록 dispatch에 액션을 전달
  return (
    <div>
      <button onClick={()=>{
        dispatch({type:'up', step:2});
      }} >+</button> 
      {count} {/* 상태값을 출력 */}
    </div>
  );
}

// 리듀서 생성 (상태를 변경하는 함수)
function reducer(state, action){
  // 기존값이 변경되지 않도록 state를 복사하고, value값을 증가
  if(action.type==='up'){
    return {...state, value: state.value + action.step};
  }
  // 액션타입이 일치하지 않으면 기존의 상태값을 반환
  return state;
}

// 초기 상태 설정
const initState = { value : 0 };

// 스토어 생성 (상태관리자)
const store = createStore(reducer, initState);

function App() {
  // 프로바이더를 통해 app에 스토어를 전달
  return (
    <Provider store={store}>
    <div>
      <Counter></Counter>
    </div>
    </Provider>
  );
}

export default App;
