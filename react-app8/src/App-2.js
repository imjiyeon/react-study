import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

// 2. topics 변수에 새로운 요소를 추가하여 목록을 업데이트한다

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
// 
function App() {

  let [mode, setMode] = useState('WELCOME');

  let [id, setId] = useState(null);

  let content = null;

  // NAV 목록을 관리하는 상태 생성
  let [topics, setTopics] = useState([
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'},
  ]);

  // 다음 ID를 저장할 id 생성
  let [nextId, setNextId] = useState(4); //현재 요소가 3개니까 초기값은 4

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

    content = <Create onCreate={(title, body)=>{
      // nav 배열에 새로운 요소 추가 (아이디값은 어쩌지? 별도로 관리)
      const newTopic = {id:nextId, title: title, body: body};
      // topics.push(newTopic); // 요소 추가
      // 그런데 topics는 일반 배열이기 때문에 값을 추가해도 화면은 그대로
      // -> topics을 state로 변경할 것

      // setTopics(topics); // topics 업데이트 (주소값: 100번지)

      // state를 변경해도 화면은 그대로
      // 원인: 상태는 값에 변화가 있어야 컴포넌트가 다시 렌더링됨
      // setTopics(newTopics);은 topics가 배열(객체)이라 주소값이 복사됨. 주소값이 그대로여서 변화가 없는것
      // 100번지 -> 100번지
      // -> 따라서 객체를 복사하여 새로운 객체로 생성해야함

      const newTopics = [...topics]; // 스프레드 연산자로 배열을 분해한 후, 새로운 배열로 생성
      newTopics.push(newTopic);
      setTopics(newTopics);  // topics 업데이트 (주소값: 200번지)

      // 글이 잘 추가되었는지 확인할 수 있게 mode를 'READ'로 변경
      // 추가한 글의 아이디 설정, 다음 아이디 값 증가
      setMode('READ');
      setId(nextId);
      setNextId(nextId + 1);

    }}>
    </Create>
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

      <a href="/create" onClick={ event => {
        event.preventDefault();
        setMode('CREATE');
      }}>Create</a>
    </div>
  );
}

export default App;
