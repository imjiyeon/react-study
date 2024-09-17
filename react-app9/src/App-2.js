import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

// 9-8부터 9-10까지
// 수정페이지에 기존 페이지 내용 출력하기

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

// 문제: 수정 페이지는 기존 페이지의 내용이 담겨있어야 함
// title과 body 필드에 기존 내용을 넣어줘야함
function Update(props) {
  return (
    <article>
      <h2>Update</h2> 
      <form onSubmit={event => {
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onUpdate(title, body);
      }}>
        {/* prop에서 전달받은 title과 body를 폼에 출력 */}
        <p>
          <input type="text" name="title" placeholder='title' value={props.title}></input>
        </p>
        <p>
          <textarea name='body' placeholder='body' value={props.body}></textarea>
        </p>
        <p>
          <input type="submit" value='Update'></input>
        </p>
      </form>
    </article>
  )
}

// 문제: 제목과 본문을 입력하면 아무런 변화가 없다
// prop 상태값을 외부에서 변경할 수 없다
// 따라서 prop를 상태값으로 변경해야 한다

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
      console.log(t.id, id);
      if(t.id === id ){
        title = t.title;
        body = t.body;
      }
    }
    content = <Article title={title} body={body}></Article>
    contextControl = <li>
      <a href={'/update/' + id} onClick={event=>{
        event.preventDefault();
        setMode('UPDATE');
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

    // Update 컴포넌트를 사용하는 쪽에서 onUpdate라는 prop 전달
    // 클릭하면 제목과 본문을 전달
    // read 모드의 코드를 활용하여 다시 title과 body 찾아내기
    let title, body = null;
    for(let t of topics){
      console.log(t.id, id);
      if(t.id === id ){
        title = t.title;
        body = t.body;
      }
    }

    content = <Update title={title} body={body} onUpdate={(title, body)=>{
    }}></Update>
  }

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
        {contextControl}
      </ul>
    </div>
  );
}

export default App;
