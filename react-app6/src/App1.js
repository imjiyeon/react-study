import './App.css';

// Header 컴포넌트를 클릭하면 경고창이 나타나도록 이벤트 처리

function Header(props) {
  //  Header 컴포넌트 안에 있는 a 태그에 onClick 이벤트 추가
  // 링크 클릭시 실행할 함수 정의
  // event: 이벤트 객체
  return <header>
    {/* <h1><a href='/' onClick={function (event) { */}
    <h1><a href='/' onClick={(event) => {
      event.preventDefault(); // 다른페이지로 이동하는 기본 동작 방지
      props.onChangeMode(); // props로 전달받은 함수를 실행
    }} >{props.title}</a></h1>
  </header>
}

function Nav(props) {

  const lis = [];

  for (let t of props.topics) {
    console.log(t);
    lis.push(<li key={t.id}><a href={'/read/' + t.id}>{t.title}</a></li>)
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
      {/* title은 WEB으로 수정 */}
      {/* Header 컴포넌트에 경고창을 띄우는 이벤트 추가 */}
      {/* WEB을 눌러도 경고창이 안나타남 */}
      <Header title="WEB" onChangeMode={function () {
        alert('Header');
      }}></Header>
      <Nav topics={topics}></Nav>
      <Article title="Welcome" body="Hello, Web"></Article>
    </div>
  );
}

export default App;