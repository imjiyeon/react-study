import logo from './logo.svg';
import './App.css';
import React from 'react';

// 잘못된 JSX 문법 써보기

function Sample() {

  // 잘못된 문법: 형제 요소들만 있으면 에러가 발생한다
  // return (
  //   <h1>안녕하세요</h1>
  //   <h2>안녕하세요</h2>
  // );

  // 올바른 문법: 하나의 요소만 반환해야 하므로 부모 태그로 자식들을 감싸야 한다
  // return (
  //   <div>
  //   <h1>안녕하세요</h1>
  //   <h2>안녕하세요</h2>
  //   </div>
  // );

  // 부모로 빈태그를 사용해도 됨
  return (
    <>
    <h1>안녕하세요</h1>
    <h2>안녕하세요</h2>
    </>
  );
}

function App() {

  return (
    <div>
      <Sample></Sample>
    </div>
  );

}

export default App;

