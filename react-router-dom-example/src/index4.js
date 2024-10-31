import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// Link, HashRouter, NavLink 추가 import
import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom';

// a태그 대신 Link컴포넌트 사용하기
// Link: 다른 페이지로 이동할때 페이지가 리로드되지 않게 처리하는 기능

// Link는 페이지 이동시 파일을 다시 불러오지 않고
// 필요한 컴포넌트만 다시 생성하여 속도가 빠름

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

      {/* a 태그를 Link 컴포넌트로 변경 
      Link를 사용하면 request가 발생하지 않음
      a 태그와 달리 링크를 클릭해도 페이지 리로드 안됨
      */}
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/topics'>Topics</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>

      {/* Link를 NavLink로 변경 
      NavLink를 사용하면 선택한 링크에 class=active가 추가됨
      이 클래스를 사용하면 사용자의 현재 위치를 표시할 수 있음 (index.css에 스타일 추가)
      */}
      {/* <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/topics'>Topics</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul> */}

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/topics' element={<Topics />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/*' element={'Not Found'}></Route>
      </Routes>

    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();