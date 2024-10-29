import './App.css';

// 모드에 따라 본문이 달라지도록 설정
// 헤더의 링크를 클릭하면 웰컴 페이지가 나오고
// 네비게이션을 클릭하면 번호에 맞는 내용이 나오도록 처리

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

  for (let t of props.topics) {
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/' + t.id} onClick={function (event) {
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

function App() {

  // 모드에 따라 화면이 달라지도록 설정
  let mode = "WELCOME"; // 초기 모드를 'WELCOME'으로 설정
  let content = null; // JSX를 저장할 변수

  const topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javascript', body: 'javascript is ...' },
  ];

  // 모드에 따라 Article 컴포넌트를 동적으로 생성
  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello, Web"></Article>
  } else if (mode === "READ") {
    content = <Article title="Welcome" body="Hello, READ"></Article>
  }

  return (
    <div className="App">
      {/* 헤더를 클릭하면 모드를 'WELCOME'으로 변경 */}
      <Header title="WEB" onChangeMode={function () {
        mode = "WELCOME";
        console.log(mode);
      }}></Header>
      {/* 네비게이션을 클릭하면 모드를 'READ'로 변경 */}
      <Nav topics={topics} onChangeMode={function (id) {
        mode = "READ";
        console.log(mode); //mode의 값이 READ로 변경되긴 하지만 화면은 그대로
      }}></Nav>
      {/* Article 컴포넌트 출력 */}
      {content}
    </div>
  );
}

export default App;

// 모드를 바꿔도 화면에는 변화가 없음
// 모드는 그냥 변수이기 때문에 값을 바꿔도 App함수는 다시 실행되지 않으므로 화면은 업데이트가 안됨
