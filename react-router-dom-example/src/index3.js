import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// 라우트 import
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// react-router-dom 사용하기 위해서 라이브러리를 먼저 설치해야 한다
// 명령: npm install react-router-dom

// Router를 사용하여 페이지 이동하기
// Router: 사용자가 특정 URL을 호출하면 해당 경로에 맞는 컴포넌트를 생성하는 기능

// a태그로 페이지를 이동하면 index.html 파일이 다시 로드되어
// 모든 컴포넌트가 다시 생성됨

function Home() {
  console.log('Home..'); // 어떤 컴포넌트가 렌더링되는지 확인
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}

function Topics() {
  console.log('Topics..'); // 어떤 컴포넌트가 렌더링되는지 확인
  return (
    <div>
      <h2>Topics</h2>
      Topics...
    </div>
  );
}

function Contact() {
  console.log('Contact..'); // 어떤 컴포넌트가 렌더링되는지 확인
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
}

function App() {
  console.log('App..'); // 어떤 컴포넌트가 렌더링되는지 확인
  return (
    <div>
      <h1>Hello React Router DOM</h1>

      {/* Home, Topics, Contact로 이동하는 링크 */}
      <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/topics'>Topics</a></li>
        <li><a href='/contact'>Contact</a></li>
      </ul>

      {/* 각 라우터는 PATH 속성을 가지고 있고 */}
      {/* PATH가 일치하는 컴포넌트가 렌더링됨 */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/topics' element={<Topics />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        {/* 사용자가 존재하지 않는 페이지로 접근하면 'Not Found' 출력 */}
        <Route path='/*' element={'Not Found'}></Route>
      </Routes>

    </div>
  );
}

// <React.StrictMode>: 개발 중에 발생할 수 있는 문제를 미리 표시해주는 부분
// 최상위 컴포넌트를 <BrowserRouter> 로 감싸서 라우터 기능 활성화
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();

// reactrouter 가이드
// https://reactrouter.com/en/main/start/tutorial

// router에 대한 설명
// https://reactrouter.com/en/main/route/route