import logo from './logo.svg';
import './App.css';

// 사용자 정의 함수는 대문자로 시작해야 한다
// 리액트에서는 사용자 정의 함수를 컴포넌트라고 부른다
// 컨텐츠를 변경하면 모든 태그가 한번에 변경된다
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

// JSX 문법:
function Sample() {

  // 잘못된 문법
  // 형제 요소들만 있으면 에러가 발생한다
  // return 
  // <h1>안녕하세요</h1>
  // <h2>안녕하세요</h2>;

  // 올바른 문법
  // 자바스크립트에서 태그를 생성할 때는 하나의 요소만 반환해야 하므로
  // 하나의 부모 요소로 자식들을 감싸야 한다
  return <div>
  <h1>안녕하세요</h1>
  <h2>안녕하세요</h2>
  </div>;
}

// 코드를 지우고 사용자 정의 함수를 사용한다
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

// 컴포넌트를 사용하면 여러 코드를 독립적인 부품으로 만들 수 있다
// 이를 통해 페이지의 복잡성을 낮추고, 코드의 재사용성을 높일 수 있다