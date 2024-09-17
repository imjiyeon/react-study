import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

// 삭제 기능 구현

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

function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);

  return (
    <article>
      <h2>Update</h2> 
      <form onSubmit={event => {
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onUpdate(title, body);
      }}>
        <p>
          <input type="text" name="title" placeholder='title' value={title} onChange={event=>{
            console.log(event.target.value);
            setTitle(event.target.value);
          }}></input>
        </p>
        <p>
          <textarea name='body' placeholder='body' value={body} onChange={event=>{
            console.log(event.target.value);
            setBody(event.target.value);
          }}></textarea>
        </p>
        <p>
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
  
  let contextControl = null;


  if(mode === "WELCOME"){
    content = <Article title="Welcome" body="Hello, Web"></Article>
  } else if(mode === "READ") {
    let title, body = null;
    for(let t of topics){
      if(t.id === id ){
        title = t.title;
        body = t.body;
      }
    }
    content = <Article title={title} body={body}></Article>
    // 태그 여러개를 묶기 위해 빈태그를 하나 추가한다
    // 빈 태그 안에 이동 링크를 넣고, 삭제 버튼을 추가한다 
    contextControl = <>
      <li>
        <a href={'/update/' + id} onClick={event=>{
          event.preventDefault();
          setMode('UPDATE');
        }}>Update</a>
      </li>
      <li>
        {/* 현재 선택된 글을 삭제하기 위해 새로운 배열을 생성 */}
        <input type='button' value='Delete' onClick={()=>{
          const newTopics = [];
          for(let i in topics){
            if(topics[i].id !== id){
              newTopics.push(topics[i]);
            }
          }
          setTopics(newTopics); //topic 상태 업데이트
          setMode('WELCOME'); //글을 삭제했기 때문에 웰컴페이지로 이동
        }}></input>
      </li>
    </>
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

    let title, body = null;
    for(let t of topics){
      if(t.id === id ){
        title = t.title;
        body = t.body;
      }
    }

    content = <Update title={title} body={body} onUpdate={(title, body)=>{
      const updateTopic = {id:id, title:title, body:body}
      const newTopics = [...topics];
      
      for(let i in newTopics){
        if(newTopics[i].id === id){
          newTopics[i] = updateTopic;
          break;
        }
      }
      setTopics(newTopics);
      setMode('READ');
    }}></Update>
  }

  // 등록과 수정 기능은 페이지를 이동했지만
  // 삭제는 누르자마자 삭제되기 때문에 버튼으로 생성한다
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
        {/* 버튼의 위치는 contextControl 안에 포함시킨다 */}
        {contextControl}
      </ul>
    </div>
  );
}

export default App;
