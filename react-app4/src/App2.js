import logo from './logo.svg';
import './App.css';

// 앞에서 작성한 태그를 컴포넌트로 만들기

// 사용자 정의 함수는 컴포넌트라고 부른다
// 컴포넌트는 대문자로 시작해야 한다

// 함수를 만들고 반환값으로 이전에 작성했던 코드를 복사하여 넣는다
function Header() {
  return <header>
  <h1><a href='/'>Web</a></h1>
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

// 코드를 지우고 컴포넌트를 사용한다
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;

// 코드를 컴포넌트로 만들면 재사용할 수 있다
// 내용을 한번에 변경할 수 있다
