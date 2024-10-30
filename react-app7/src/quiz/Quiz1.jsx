import './App.css';
// react에서 useState 훅 함수 가져오기
import { useState } from 'react';

// useState를 사용하여 카운터 앱 만들기

// +버튼을 누르면 count가 1증가되고
// -버튼을 누르면 count가 1감소되고
// 0버튼을 클릭하면 count가 0으로 초기화되도록 설정

function App() {

  // state는 컴포넌트의 생명주기를 관리하는 데이터이므로
  // 일반함수에서는 사용할 수 없음
  
  // count를 저장하는 state 생성
  const [count, setCount] = useState(0); //초기값

  // 증가, 감소, 초기화 이벤트 함수 정의
  // function down() {
  //   setCount(count - 1);
  // }

  function reset() {
    setCount(0);
  }

  function up() {
    setCount(count + 1);
  }

  // 각 버튼에 이벤트 함수 설정
  return (
    <div>
      <input type='button' value="-" onClick={()=>{
        setCount(count - 1);
      }}></input>
      <input type='button' value="0" onClick={reset}></input>
      <input type='button' value="+" onClick={up}></input>
      
      {/* 현재 count값 출력 */}
      <span className='count-span'>{count}</span>
    </div>
  );
}

export default App;
