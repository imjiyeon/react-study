import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes, NavLink, useParams } from 'react-router-dom';

// useParam 훅을 사용하여 선택한 토픽을 출력

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}

let topics = [
  { id: 1, title: 'HTML', description: 'HTML is ...' },
  { id: 2, title: 'JS', description: 'JS is ...' },
  { id: 3, title: 'React', description: 'React is ...' }
]

function Topic() {

  // useParams 훅을 사용하여 URL의 파라미터 가져오기
  let params = useParams();
  console.log(params);

  // topic id 파라미터 꺼내기
  let topic_id = params.topic_id;

  // 페이지 못찾았을 때 초기값 설정
  let selected_topic = {
    title: 'Sorry',
    description: 'Not found'
  };

  // topics 배열에서 id에 해당하는 topic 찾기
  for (let t of topics) {
    if (t.id === Number(topic_id)) {
      selected_topic = t;
    }
  }

  // 찾은 데이터 출력하기
  return (
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.description}
    </div>
  );
}

function Topics() {

  let lis = [];

  for (let t of topics) {
    lis.push(<li><NavLink to={'/topics/' + t.id}>{t.title}</NavLink></li>);
  }

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        {lis}
      </ul>

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