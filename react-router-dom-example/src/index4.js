import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// Link, HashRouter, NavLink 추가 임포트
import { BrowserRouter, Route, Routes, Link, HashRouter, NavLink } from 'react-router-dom';

/* 링크 사용하기 */

// Link: 링크를 클릭했을 때, 다른 페이지로 이동해도 페이지가 리로드되지 않게 처리하는 기능

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

function App() {

  return (
    <div>
      <h1>Hello React Router DOM</h1>

      {/* a 링크를 Link 컴포넌트로 교체 */}
      {/* Link를 NavLink로 교체 */}
      {/* NavLink를 사용하면 클릭했을 때 class=active라는 속성이 생김. 
          이 속성을 이용하면 사용자가 현재 어떤 페이지에 위치하고 있는지 표시할 수 있음.
          (index.css 추가)
      */}
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/topics'>Topics</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul> 

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/topics' element={<Topics />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/*' element={'Not Found'}></Route>
      </Routes>
    
    </div>
  );
}
// 이전과 달리 링크를 클릭해도 페이지가 리로드되지 않는다

// Router 종류:
// BrowserRouter: URL을 그대로 사용하고, 서버에서 경로를 처리할 때 사용
// HashRouter: URL에 #이 포함되고, 서버가 없는 경우에 사용

// 우리는 서버에서 경로를 처리하므로 BrowserRouter를 사용할 예정
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();