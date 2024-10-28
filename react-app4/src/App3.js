import logo from './logo.svg';
import './App.css';

// 컴포넌트를 몇개 더 추가하고 내용 변경하기

// 내용 변경 web->react
// Header를 사용한 부분이 한번에 변경됨
function Header() {
  return <header>
  <h1><a href='/'>React</a></h1>
  </header>
}

function Nav() {
  return <nav>
  <ol>
    <li><a href='/read/1'>html</a></li>
    <li><a href='/read/2'>css</a></li>
    <li><a href='/read/3'>js</a></li>
  </ol>
  </nav>
}

function Article() {
  return <article>
  <h2>Welcome</h2>
  Hello, WEB
  </article>
}

// 헤더를 복사하여 2개 더 추가
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Header></Header>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
