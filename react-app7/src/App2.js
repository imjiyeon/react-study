import './App.css';
// react에서 useState 훅 임포트
import { useState } from 'react';

// 모드가 바뀌면 컴포넌트 함수가 다시 실행되어 UI가 업데이트 되어야함
// useState 훅을 사용하여 상태를 관리하고 컴포넌트를 업데이트함

function Header(props) {

  return <header>
    <h1><a href='/' onClick={event => {
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a>
    </h1>
  </header>
}

function Nav(props) {

  const lis = [];

  for (let t of props.topics) {
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/' + t.id} onClick={function (event) {
        event.preventDefault();
        props.onChangeMode(event.target.id);
      }}>{t.title}</a>
    </li>)
  }

  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}

function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

function App() {

  // mode를 일반 변수에서 state로 변경
  // state(상태)를 만들때는 useState 함수를 사용
  // state: 컴포넌트의 상태를 관리하며, 값이 변경되면 UI 새로 생성함

  // useState는 배열을 반환하는데 첫 번째 요소는 현재 상태, 두 번째 요소는 상태를 업데이트하는 함수
  // let mode = useState('WELCOME'); //초기값
  // console.log(mode); 

  // 구조 분해 할당으로 useState로부터 모든 요소를 한번에 추출
  // 배열의 첫번째 요소는 mode라는 변수에 저장, 두번째 요소는 setMode라는 변수에 저장
  const [mode, setMode] = useState('WELCOME');

  let content = null;

  const topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javascript', body: 'javascript is ...' },
  ];

  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello, Web"></Article>
  } else if (mode === "READ") {
    content = <Article title="Welcome" body="Hello, READ"></Article>
  }

  return (
    <div className="App">
      <Header title="WEB" onChangeMode={function () {
        // state는 setMode 함수를 사용하여 변경
        // mode = "WELCOME";
        setMode('WELCOME');
      }}></Header>
      <Nav topics={topics} onChangeMode={function (id) {
        // mode = "READ";
        setMode('READ');
      }}></Nav>
      {content}
    </div>
  );
}

export default App;
