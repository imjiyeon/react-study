import './App.css';
// react 패키지에서 useState 함수 가져오기
import { useState } from 'react';

// useState를 사용하여 카운터 앱 만들기
// 버튼을 클릭하면 0 부분이 바뀌도록 처리

// useState란? 상태값을 만드는 함수
// 값이 변경되면 컴포넌트가 새로 렌더링됨

// 불필요한 코드 제거
function App() {

  // 0을 초기값으로 하는 상태 만들기
  // 상태값, 상태를 변경하는 함수
  const [count, setCount] = useState(0);

  function down() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  function up() {
    setCount(count + 1);
  }

  // + 버튼을 누르면 카운터를 1 증가시키고 - 버튼을 누르면 1 감소시키기
  return (
    <div class='App' >
      <input type='button' value="-" onClick={down}></input>
      <input type='button' value="0" onClick={reset}></input>
      <input type='button' value="+" onClick={up}></input>
      <span>{count}</span>
    </div>
  );
}


export default App;
