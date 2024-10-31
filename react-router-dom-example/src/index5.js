import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom';

// 자식 컴포넌트에서 Route를 추가하여 하위 경로를 처리
// Topic 컴포넌트에서 다른 페이지 추가하기

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}

function Topics() {

  return (
    <div>
      <h2>Topics</h2>
      {/* Topics... */}

      {/* 링크 추가 */}
      <ul>
        <li><NavLink to="/topics/1">HTML</NavLink></li>
        <li><NavLink to="/topics/2">JS</NavLink></li>
        <li><NavLink to="/topics/3">React</NavLink></li>
      </ul>

      {/* 자식 컴포넌트에서 Route 추가 */}
      {/* 부모 경로에 붙은 하위경로만 path로 설정 */}
      <Routes>
        <Route path='/1' element={'HTML is ...'}></Route>
        <Route path='/2' element={'JS is ...'}></Route>
        <Route path='/3' element={'React is ...'}></Route>
      </Routes>
    </div>
  );
}

function Contact() {
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

      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/topics'>Topics</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        {/* topics 경로 수정. /*는 하위 경로도 포함한다는 의미 */}
        {/* topics와 관련된 경로가 여러개일 경우 사용. 예: /topics/1, /topics/2 */}
        <Route path='/topics/*' element={<Topics />}></Route>
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