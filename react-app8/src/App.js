import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

// 1. 글 등록 기능 추가하기

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

// 새로운 컴포넌트 생성
// 폼을 생성하고 제목과 본문을 입력하는 필드와 전송 버튼 추가
function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      {/* onCreate 함수를 호출하기 위해서 form 태그에 submit 이벤트 처리 
          onSubmit은 폼 안에 submit 버튼을 클릭하면 발생함
      */}
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
// 이제 topics 변수에 새로운 요소를 축하하여 목록을 업데이트한다

// create 버튼을 클릭하면글을 생성하는 폼이 나온다
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
    // Create 컴포넌트를 사용할 때, 후속 처리를 하기 위해 prop에 onCreate 함수 전달
    // 사용자가 버튼을 클릭하면 해당함수가 실행됨
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
        event.preventDefault();
        setMode('CREATE');
      }}>Create</a>
    </div>
  );
}

export default App;
