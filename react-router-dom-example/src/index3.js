import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// 라우트 임포트
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// react-router-dom 사용하기 위해서 라이브러리를 먼저 설치해야 한다
// 명령: npm install react-router-dom

/* 라우팅 사용하기 */
// Router란? 사용자가 특정 URL을 호출하면 해당 경로에 맞는 컴포넌트를 생성하는 기능

function Home(){
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}

function Topics(){
  return (
    <div>
      <h2>Topics</h2>
      Topics...
    </div>
  );
}

function Contact(){
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
}

// 라우팅: 사용자가 어떤 주소로 들어왔을 때 그 주소에 해당하는 페이지를 보내주는 것
function App() {
  // Home, Topic, Contact 컴포넌트를 URL에 따라 다르게 구현
  return (
    <div>
      <h1>Hello React Router DOM</h1>

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
// 지우고 <BrowserRouter> 로 감싸주기
// 이제 App 컴포넌트가 브라우저 라우터를 사용할 수 있는 상태가 된다
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