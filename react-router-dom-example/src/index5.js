import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// useParams 모듈 import
import { BrowserRouter, Route, Routes, NavLink, useParams } from 'react-router-dom';

/* Nested Routing */

// Nested Routing: 라우트 안에 다른 라우트를 중첩해서 구성하는 방식이다
// 자식 컴포넌트에서 또다른 라우트가 필요할 때 사용한다

function Home(){
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}

// 콘텐츠 배열 생성
let contents = [
  {id:1, title:'HTML', description: 'HTML is ...'},
  {id:2, title:'JS', description: 'JS is ...'},
  {id:3, title:'React', description: 'React is ...'}
]

// Topic 컴포넌트 추가: 선택된 토픽의 내용을 출력
function Topic(){

  // useParams 이라는 hook을 사용하여 id 파라미터 가져오기
  let params = useParams();
  console.log(params);

  let topic_id = params.topic_id;
  
  // 초기값 설정
  let selected_topic = {
    title: 'Sorry',
    description: 'Not found'
  };

  // contents 배열에서 일치하는 id 값을 찾아서 해당 topic을 selected_topic로 설정
  for(let i=0; i<contents.length; i++){
    if(contents[i].id === Number(topic_id)){
      selected_topic = contents[i];
      break;
    }
  }

  // selected_topic를 콘텐츠로 출력
  return (
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.description}
    </div>
  );
}

// Topics 컴포넌트 추가: 전체 토픽 목록 표시
// 토픽 안에 또 다른 페이지 추가하기
function Topics(){

  // contents 배열을 이용하여 토픽 목록을 동적으로 생성

  let lis = [];

  // 배열 요소의 내용으로 NavLink 생성
  for(var i=0; i<contents.length; i++){
    lis.push(<li><NavLink to={'/topics/' + contents[i].id}>{contents[i].title}</NavLink></li>);
  }

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {lis}
      </ul> 

      {/* 하나의 라우터를 가지고 Topic 컴포넌트 생성
      URL의 숫자를 파라미터(topic_id)로 전달받음
      예를 들어 /1이 호출되면 '1'이 파라미터(topic_id)로 전달됨 */}
      <Routes>
        <Route path='/:topic_id' element={<Topic />}></Route>
      </Routes>

    </div>
  );
}
// 네비게이션 링크를 클릭하면 해당 주소가 호출됨
// 해당 경로에 맞는 route가 실행되고, topic 컴포넌트가 생성됨
// 이때 URL에 포함된 파라미터가 topic 컴포넌트로 전달됨

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

      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/topics'>Topics</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul> 

      {/* /topics 경로를 /topics/* 로 변경 
      * 는 하위 경로를 포함한다는 의미로, Topics과 관련된 경로가 여러개일 때 사용함
      예: /topics/1, /topics/2
      */}

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