import logo from './logo.svg';
import './App.css';
// react 패키지에서 React 가져오기
import React from 'react';

// jsx 문법으로 HTML 코드 작성하기
// 자바스크립트와 HTML 코드가 결합된 것을 JSX문법이라고 함

function App() {

  // createElement 함수로 돔 생성
  // 태그, props, 컨텐츠
  let element1 = React.createElement("div", null, "Hello");
  // jsx 방식으로 돔 생성
  // jsx 방식을 사용하면 내부적으로는 createElement함수가 호출되어 결과가 같음
  let element2 = <div>Hello</div>

  return (
    <div>
      {element1}
      {element2}
    </div>
  );
}

export default App;
