import logo from './logo.svg';
import './App.css';
import {useState} from 'react'; // react에서 제공하는 useState라는 함수 사용하기

/* 
2. 지역변수인 mode를 변경하면 아무일도 일어나지 않으므로
   state를 사용하여 컴포넌트의 상태를 관리하고 화면을 변경한다
*/

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

// mode는 지역 변수로 범위가 제한되어 사용이 불편함
// useState는 컴포넌트의 상태를 관리하며, 다른 컴포넌트와 상태를 공유할 수 있어 전역처럼 사용할 수 있음
function App() {

  // 모드를 관리하는 새로운 상태 생성
  // useState는 배열을 반환하는데 첫 번째 요소는 현재 상태 값, 두 번째 요소는 상태를 업데이트하는 함수
  // let _mode = useState('WELCOME');
  // console.log(_mode); 

  // 구조 분해 할당으로 useState로부터 모든 요소를 한번에 추출
  let [mode, setMode] = useState('WELCOME');

  let content = null;

  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'},
  ];

  // 모드에 따라 출력할 내용을 결정
  if(mode === "WELCOME"){
    content = <Article title="Welcome" body="Hello, Web"></Article>
  } else if(mode === "READ") {
    content = <Article title="Welcome" body="Hello, READ"></Article>
  }

  return (
    <div className="App">
      <Header title="WEB" onChangeMode={function () {
        // 상태값을 'WELCOME'으로 변경
        // mode = "WELCOME";
        setMode('WELCOME'); // setMode를 호출하여 mode 상태값을 업데이트
      }}></Header>
      <Nav topics={topics} onChangeMode={function(id){
        // 상태값을 'READ'로 변경
        // mode = "READ";
        setMode('READ'); // setMode를 호출하여 mode 상태값을 업데이트
      }}></Nav>
      {content}
    </div>
  );
}

export default App;
