import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

// 9-11부터 9-17까지
// 글을 수정한 후에 조회 페이지로 이동

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

// prop을 사용하여 입력필드에 값을 설정하면 값이 변경되지 않는 문제가 발생함
// prop은 부모 컴포넌트에서 전달받은 값이므로 자식 컴포넌트에서 직접 변경할 수 없음
// 이 문제를 해결하기 위해 prop을 상태값으로 변경하여 관리
function Update(props) {

  // props으로 전달받은 제목과 본문을 상태로 변경하여 관리
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
        {/* prop을 사용했을 때 입력값이 변경되지 않는 문제 발생.. */}
        {/* prop을 상태값으로 변경 */}
        {/* onChange 이벤트를 추가하여 사용자가 입력한 값을 상태로 업데이트 */}
        <p>
          <input type="text" name="title" placeholder='title' value={title} onChange={event=>{
            console.log(event.target.value);
            setTitle(event.target.value); // title 상태 업데이트
          }}></input>
        </p>
        <p>
          <textarea name='body' placeholder='body' value={body} onChange={event=>{
            console.log(event.target.value);
            setBody(event.target.value); // body 상태 업데이트
          }}></textarea>
        </p>
        <p>
          <input type="submit" value='Update'></input>
        </p>
      </form>
    </article>
  )
}

// Update 버튼을 클릭하면 폼의 onSubmit 호출되고, onUpdate 호출되면서 title과 body 전달
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

    let title, body = null;
    for(let t of topics){
      if(t.id === id ){
        title = t.title;
        body = t.body;
      }
    }

    content = <Update title={title} body={body} onUpdate={(title, body)=>{
      // title과 body가 잘 들어왔는지 확인
      console.log(title, body);

      // 이제 변경된 내용으로 topic을 수정해야함
      // 이전에 read할 때 셋팅된 id값을 사용
      const updateTopic = {id:id, title:title, body:body}

      // 바꾸는 대상은 배열(객체)이므로 그냥 변경하면 안됨
      // 새로운 배열로 복사하기
      const newTopics = [...topics];
      
      for(let i in newTopics){
        if(newTopics[i].id === id){
          newTopics[i] = updateTopic; // 특정 요소 교체하기
          break;
        }
      }
      setTopics(newTopics); // topics 상태 업데이트
      setMode('READ'); // 모드 상태 업데이트
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
