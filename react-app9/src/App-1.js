import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

// 9-1부터 9-7까지
// 수정페이지로 이동하는 링크와 수정페이지 만들기
// Update 컴포넌트 구현까지

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

function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      <form onSubmit={event => {
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onCreate(title, body);
      }}>
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

// Update 컴포넌트 추가
function Update(props) {
  return (
    <article>
      {/* 타이틀 수정 */}
      <h2>Update</h2> 
      <form onSubmit={event => {
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        // props로 onUpdate를 호출하도록 수정
        props.onUpdate(title, body);
      }}>
        <p>
          <input type="text" name="title" placeholder='title'></input>
        </p>
        <p>
          <textarea name='body' placeholder='body'></textarea>
        </p>
        <p>
          {/* 버튼 이름 수정 */}
          <input type="submit" value='Update'></input>
        </p>
      </form>
    </article>
  )
}

function App() {
  let [mode, setMode] = useState('WELCOME');
  let [id, setId] = useState(null);
  let content = null;
  let [topics, setTopics] = useState([
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'},
  ]);
  let [nextId, setNextId] = useState(4);
  
  // 글 상세보기 페이지에서만 Update 링크 표시하기
  let contextControl = null;


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
    // Update 링크를 잘라서 contextControl 변수에 저장
    // 링크에 글의 id 추가
    // 링크에 onClick prop 추가
    contextControl = <li>
      <a href={'/update/' + id} onClick={event=>{
        event.preventDefault();
        setMode('UPDATE'); //수정 모드로 업데이트
      }}>Update</a>
    </li>;
  } else if(mode === "CREATE") {
    
    content = <Create onCreate={(_title, _body)=>{
      const newTopic = {id:nextId, title: _title, body: _body};
      const newTopics = [...topics];
      newTopics.push(newTopic);
      setTopics(newTopics);
      setMode('READ');
      setId(nextId);
      setNextId(nextId + 1);
    }}>
    </Create>
  } else if(mode === "UPDATE"){
    // mode가 "UPDATE"일 때 else if 추가
    // content로 Update 컴포넌트 출력
    content = <Update onUpdate={(title, body)=>{

    }}></Update>
  }

  // 수정 페이지로 이동하는 링크 추가
  return (
    <div className="App">
      <Header title="WEB" onChangeMode={function () {
        setMode('WELCOME');
      }}></Header>

      <Nav topics={topics} onChangeMode={function(_id){
        setMode('READ');
        setId(_id);
      }}></Nav>
      {content}

      <ul>
        <li>
          <a href="/create" onClick={ event => {
            event.preventDefault();
            setMode('CREATE');
            }}>Create</a>
        </li>
        {/* <li>
          <a href='/update'>Update</a>
        </li> */}
        {/* 모드가 read일때만 Update 링크 표시 */}
        {contextControl}
      </ul>
    </div>
  );
}

export default App;
