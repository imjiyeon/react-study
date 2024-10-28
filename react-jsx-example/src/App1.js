import logo from './logo.svg';
import './App.css';
// react 패키지에서 React 객체 가져오기
import React from 'react';

// HTML 코드 작성하기

function App() {

  // 1.자바스크립트의 createElement 함수로 HTML 태그 생성
  // 인자: 태그종류, props, 컨텐츠(내용)
  let element1 = React.createElement("div", null, "Hello");

  // 2.리액트의 jsx로 HTML 태그 생성
  // jsx 방식을 사용하면 createElement함수로 변환되어 결과가 같음
  let element2 = <div>Hello</div>

  // JSX 안에서 변수를 사용할 때는 {} 중괄호 문법 사용

  // 필요없는 태그 모두 삭제
  return (
    <div>
      {element1}
      {element2}
    </div>
  );
}

export default App;
