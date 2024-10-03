import './App.css';
import { useState, useReducer } from 'react';


// 텍스트 상자를 추가하여 사용자가 입력한 숫자만큼 카운터 값을 증가/감소

function App() {

  // action.type에 따라 상태를 변경, action.num만큼 증가 또는 감소
  function countReducer(oldCount, action){

    if(action.type === 'UP'){
      return oldCount + action.num;    
    } else if(action.type === 'DOWN'){
      return oldCount - action.num;  
    } else if(action.type === 'RESET'){
      return 0;  
    }

  }

  const [count, countDispatch] = useReducer(countReducer, 0);

  // 텍스트 상자를 통해 입력받은 값을 state로 관리
  const [num, setNum] = useState(0);

  // 사용자가 텍스트 상자에 값을 입력할 때마다 호출되는 함수
  // 입력된 값을 숫자로 변환하여 num 상태를 업데이트
  function changeNum(event){
    setNum(Number(event.target.value));
  }

  // countDispatch를 호출하여 액션과 증가해야할 값 전달
  function down(){
    countDispatch({ type:'DOWN', num: num});
  }

  function reset(){
    countDispatch({ type:'RESET', num: num});
  }

  function up(){
    countDispatch({ type:'UP', num: num});
  }

  return (
    <div>
      <input type='button' value="-" onClick={down}></input>
      <input type='button' value="0" onClick={reset}></input>
      <input type='button' value="+" onClick={up}></input>
      <input type='text' value={num} onChange={changeNum} ></input>
      <span>{count}</span>
    </div>
  );
}

export default App;
