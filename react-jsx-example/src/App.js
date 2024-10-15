import logo from './logo.svg';
import './App.css';
import React from 'react';

// jsx에서 자바스크립트 사용하기

function App() {

  // 변수 선언
  const conent = 'Hi';

  // jsx에서 자바스크립트를 사용할 때는 {}중괄호를 사용
  // 속성도 마찬가지
  return (
    <div>
      <div>{conent}</div>
      <input value={conent}></input>
    </div>
  );
}

export default App;
