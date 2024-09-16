import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

/* 3. 선택한 항목에 따라 페이지 표시하기 */

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

  for(let t of props.topics){

    // a 태그에서 id 속성을 꺼내면 문자열로 반환되므로 Number()를 사용해 숫자로 변환
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={function(event){
        event.preventDefault();
        props.onChangeMode(Number(event.target.id)); // 선택된 항목의 id를 숫자로 변환하여 전달
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

  let [mode, setMode] = useState('WELCOME');

  // 선택된 항목의 id를 관리하는 상태 생성
  let [id, setId] = useState(null);

  // 표시할 내용
  let content = null;

  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'},
  ];

  if(mode === "WELCOME"){
    // 'WELCOME' 모드일 때 표시할 내용
    content = <Article title="Welcome" body="Hello, Web"></Article>
  } else if(mode === "READ") {
    // 'READ' 모드일 때 선택된 항목의 id에 따라 내용을 출력
    let title, body = null;
    for(let t of topics){
      // t.id는 숫자고, id는 문자여서 비교할 수 없음 (숫자 1 문자 '1')
      // id 타입을 통일해야 함
      console.log(t.id, id);
      if(t.id === id ){
        title = t.title;
        body = t.body;
      }
    }
    content = <Article title={title} body={body}></Article>
    // 확인을 해보면 목록을 선택해도 화면에는 변화가 없다
  }

  return (
    <div className="App">
      <Header title="WEB" onChangeMode={function () {
        setMode('WELCOME');
      }}></Header>

      {/* 이벤트 함수의 매개변수 이름 헷갈리니까 바꾸기 */}
      <Nav topics={topics} onChangeMode={function(_id){
        setMode('READ');
        // 선택한 항목의 id로 id 상태를 업데이트
        setId(_id);
      }}></Nav>
      {content}
    </div>
  );
}

export default App;
