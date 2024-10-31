import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom';

// topics 리스트 생성
// Topic 컴포넌트 추가
// topics 리스트를 생성하여 자동으로 링크 생성

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}

// topic 리스트 생성
let topics = [
  { id: 1, title: 'HTML', description: 'HTML is ...' },
  { id: 2, title: 'JS', description: 'JS is ...' },
  { id: 3, title: 'React', description: 'React is ...' }
]

// Topic 컴포넌트 추가: 특정 토픽의 내용을 출력
function Topic() {

  return (
    <div>
      <h3>Topic</h3>
      Topic...
    </div>
  );
}

function Topics() {

  // Link 리스트
  let lis = [];

  // topics를 사용하여 링크 생성
  for (let t of topics) {
    lis.push(<li><NavLink to={'/topics/' + t.id}>{t.title}</NavLink></li>);
  }

  // 전체 토픽 목록 표시
  return (
    <div>
      <h2>Topics</h2>

      {/* 기존코드를 삭제하고 변수로 변경 */}
      <ul>
        {lis}
      </ul>

      {/* 기존코드를 삭제하고 Route 하나로 처리 */}
      {/* URL에 포함된 숫자를 파라미터로 처리 */}
      {/* 예를 들어 /1이 호출되면 '1'이 파라미터(topic_id)로 전달됨 */}
      {/* 토픽 컴포넌트를 반환 */}
      <Routes>
        <Route path='/:topic_id' element={<Topic></Topic>}></Route>
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