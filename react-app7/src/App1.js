import logo from './logo.svg';
import './App.css';

/* 1.링크 또는 목록을 클릭하면 화면이 변경되도록 처리 */

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

// 헤더의 링크를 클릭하면 웰컴 페이지가 나오고
// 목록을 선택하면 본문이 달라지도록 처리
function App() {

  // mode에 따라 Article 컴포넌트를 동적으로 구성하고, content 변수에 저장하여 출력
  let mode = "WELCOME"; // 초기 모드를 'WELCOME'으로 설정
  let content = null; // 표시할 내용을 저장할 변수

  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'},
  ];

  // 모드에 따라 출력할 콘텐츠 결정
  if(mode === "WELCOME"){
    content = <Article title="Welcome" body="Hello, Web"></Article>
  } else if(mode === "READ") {
    content = <Article title="Welcome" body="Hello, READ"></Article>
  }

  // 문제: 하지만 모드를 바꿔도 화면에는 변화가 없음
  // 이유? 모드를 변경해도 App함수는 다시 실행되지 않기 때문에 리턴값에는 변화가 없음
  // -> 상태값을 사용하여 모드가 바뀌면 app함수를 다시 실행하여 컴포넌트를 생성해야함

  return (
    <div className="App">
      <Header title="WEB" onChangeMode={function () {
        mode = "WELCOME";
      }}></Header>
      <Nav topics={topics} onChangeMode={function(id){
        mode = "READ";
      }}></Nav>
      {/* 생성된 콘텐츠를 출력 */}
      {content} 
    </div>
  );
}

export default App;
