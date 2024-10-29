import './App.css';

// 내비 컴포넌트에 있는 목록을 클릭하면, id가 나타나도록 이벤트 처리
// html을 클릭하면 1, css를 클릭하면 2, javascript를 클릭하면 3

function Header(props) {
  return <header>
    <h1><a href='/' onClick={(event) => {
      event.preventDefault();
      props.onChangeMode();
    }} >{props.title}</a></h1>
  </header>
}

// Nav 컴포넌트 안에 있는 목록의 각 a 태그에 onClick 이벤트 추가
// 링크 클릭하면 실행할 함수 정의
function Nav(props) {

  const lis = [];

  for (let t of props.topics) {
    // onChangeMode 함수에 id를 전달하기 위해 a태그에 id 추가
    lis.push(<li key={t.id}><a id={t.id} href={'/read/' + t.id} onClick={(event) => {
      event.preventDefault();
      // props로 전달받은 함수를 실행
      // event.target.id: 이벤트가 발생한 a태그에서 id를 꺼내서 사용
      props.onChangeMode(event.target.id);
    }}>{t.title}</a></li>)
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

  const topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javascript', body: 'javascript is ...' },
  ];

  return (
    <div className="App">
      <Header title="WEB" onChangeMode={function () {
        alert('Header');
      }}></Header>
      {/* Nav 컴포넌트에 경고창을 띄우는 이벤트 추가 */}
      {/* 매개변수로 id를 받고, id를 출력 */}
      <Nav topics={topics} onChangeMode={function (id) {
        alert(id);
      }}></Nav>
      <Article title="Welcome" body="Hello, Web"></Article>
    </div>
  );
}

export default App;