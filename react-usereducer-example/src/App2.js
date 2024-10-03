import './App.css';
// react 패키지에서 useReducer 함수 가져오기
import { useState, useReducer } from 'react';

// 이전 방식을 사용하면 버튼을 클릭할 때 상태값이 직접 처리된다
// useReducer를 사용하여 상태값을 중앙에서 처리한다

function App() {

  // state를 중앙에서 처리할 리듀서 함수 만들기
  // oldCount: 현재 상태값, action: 동작
  function countReducer(oldCount, action){

    // action에 따라 상태를 처리하여 반환
    if(action === 'UP'){
      return oldCount + 1;    
    } else if(action === 'DOWN'){
      return oldCount - 1;  
    } else if(action === 'RESET'){
      return 0;  
    }
     // 카운터의 값이 변경되면서 App 컴포넌트가 다시 실행됨

  }

  // useState 대신 useReducer 함수 사용
  // 차이점? 리듀서라는 함수를 사용하여 상태를 직접처리하지 않고, 리듀서에게 맡김
  const [count, countDispatch] = useReducer(countReducer, 0);

  // 값을 바꿀 때는 직접 바꾸지 않고 countDispatch 함수에게 전달
  // 디스패처에 전달하면 countReducer 함수가 호출됨
  function down(){
    countDispatch('DOWN');
  }

  function reset(){
    countDispatch('RESET');
  }

  function up(){
    countDispatch('UP');
  }

  return (
    <div>
      <input type='button' value="-" onClick={down}></input>
      <input type='button' value="0" onClick={reset}></input>
      <input type='button' value="+" onClick={up}></input>
      <span>{count}</span>
    </div>
  );
}



export default App;
