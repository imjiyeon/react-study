import logo from './logo.svg';
import './App.css';

/* 컴포넌트에 이벤트 추가하기 */

// props로 전달받은 이벤트를 꺼내서 실행
function Header(props) {

  console.log('props', props.title);

  // 이 a 태그는 순수한 html이 아니고 유사 html이라 문법이 다름
  // onclick 뒤에 ""큰따옴표를 쓰지 않고 함수를 써야 한다

  // 이벤트 객체는 이벤트 상황을 제어할 수 있는 여러가지 정보가 들어가 있음
  return <header>
  <h1><a href='/' onClick={event => {
    event.preventDefault(); //다른페이지로 이동하는 기본 동작 방지
    props.onChangeMode(); //prop으로 전달받은 함수를 실행
  }}>{props.title}</a>
  </h1>
  </header>
}

function Nav(props) {

  const lis = [];

  // html을 클릭하면 1, css를 클릭하면 2를 출력한다
  for(let t of props.topics){
    console.log(t);
    // onChangeMode는 id가 필요하므로 각 항목에 id를 주입해야 한다
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={function(event){
        event.preventDefault();
        // event.target을 사용하면 이벤트가 발생된 a 태그를 가리킨다
        // 이 a 태그가 가지고 있는 id를 꺼내어 사용한다
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

// 컴포넌트를 사용하는 쪽에서 이벤트 정의
function App() {

  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'},
  ];

  // Header 컴포넌트에 이벤트 기능을 추가한다 (링크를 클릭하면 경고창 표시)
  // Header 컴포넌트에 props으로 함수를 전달한다

  // Nav 컴포넌트에 이벤트 기능을 추가한다 (목록을 클릭하면 번호 표시)
  return (
    <div className="App">
      <Header title="WEB" onChangeMode={function () {
        alert('Header');
      }}></Header>
      <Nav topics={topics} onChangeMode={function(id){
        alert(id);
      }}></Nav>
      <Article title="Welcome" body="Hello, Web"></Article>
      <Article title="Hi" body="Hello, React"></Article>
    </div>
  );
}

export default App;
