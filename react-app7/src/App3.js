import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// 네비게이션에서 선택한 글의 내용이 출력되도록 처리
// 1번을 클릭하면 HTML, 2번을 클릭하면 CSS, 3번을 클릭하면 JS

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

// !! state는 컴포넌트의 생명주기를 관리하는 데이터이므로 일반함수에서는 사용할 수 없음
function App() {

  let [mode, setMode] = useState('WELCOME');

  // 네비게이션 id를 관리할 state 생성
  let [id, setId] = useState(null);

  let content = null;

  const topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javascript', body: 'javascript is ...' },
  ];

  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello, Web"></Article>
  } else if (mode === "READ") {

    let title, body = null;

    // topics 목록에서 현재 선택된 id에 맞는 내용을 찾기
    for (let t of topics) {
      console.log(t.id, id); // 숫자 1과 문자 '1'
      if (t.id === Number(id)) {
        title = t.title;
        body = t.body;
      }
    }
    // 선택한 내용에 따라 컴포넌트 생성
    content = <Article title={title} body={body}></Article>
  }
  // 확인을 해보면 목록을 선택해도 화면에는 변화가 없다
  // 조건문에서 id는 nav컴포넌트의 a태그의 속성인데 문자로 전달됨
  // 타입을 숫자로 변환해야함

  return (
    <div className="App">
      <Header title="WEB" onChangeMode={function () {
        setMode('WELCOME');
      }}></Header>
      <Nav topics={topics} onChangeMode={function (id) {
        setMode('READ');
        // 네비게이션을 클릭하면 선택한 항목의 id로 state를 변경
        setId(id);
      }}></Nav>
      {content}
    </div>
  );
}

export default App;
