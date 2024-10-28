import logo from './logo.svg';
import './App.css';

// 불필요한 코드 모두 삭제
// 헤더, 네비게이션, 아티클 태그를 작성

function App() {
  return (
    <div className="App">
      <header>
        <h1><a href='/'>Web</a></h1>
      </header>
      <ol>
        <li><a href='/read/1'>html</a></li>
        <li><a href='/read/2'>css</a></li>
        <li><a href='/read/3'>js</a></li>
      </ol>
      <article>
        <h2>Welcome</h2>
        Hello, WEB
      </article>
    </div>
  );
}

export default App;