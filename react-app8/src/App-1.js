import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

// 게시물 등록 컴포넌트 만들기

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

    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={function(event){
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));
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

// 게시물 등록 컴포넌트 생성
// 폼에 제목필드, 내용필드, 전송버튼 추가
function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      <form>
        <p>
          <input type="text" name="title" placeholder='title'></input>
        </p>
        <p>
          <textarea name='body' placeholder='body'></textarea>
        </p>
        <p>
          <input type="submit" value='Create'></input>
        </p>
      </form>
    </article>
  )
}

// create 버튼을 클릭하면 글을 생성하는 폼이 나온다
function App() {

  let [mode, setMode] = useState('WELCOME');
  let [id, setId] = useState(null);
  let content = null;

  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'},
  ];

  if(mode === "WELCOME"){
    content = <Article title="Welcome" body="Hello, Web"></Article>
  } else if(mode === "READ") {
    let title, body = null;
    for(let t of topics){
      console.log(t.id, id);
      if(t.id === id ){
        title = t.title;
        body = t.body;
      }
    }
    content = <Article title={title} body={body}></Article>
  } else if(mode === "CREATE") {
    // "CREATE" 모드면 Create 컴포넌트 생성
    content = <Create></Create>
  }

  return (
    <div className="App">
      <Header title="WEB" onChangeMode={function () {
        setMode('WELCOME');
      }}></Header>

      <Nav topics={topics} onChangeMode={function(id){
        setMode('READ');
        setId(id);
      }}></Nav>
      {content}

      {/* 생성페이지로 이동하는 링크 추가. 링크를 클릭했을 때 MODE를 'CREATE'로 바뀌고 상세페이지 나타나도록 설정 */}
      <a href="/create" onClick={ event => {
        event.preventDefault(); // 페이지가 변경되지 않도록 방지
        setMode('CREATE'); // 모드 업데이트
      }}>Create</a>
    </div>
  );
}

export default App;
