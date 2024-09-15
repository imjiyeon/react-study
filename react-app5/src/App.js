import logo from './logo.svg';
import './App.css';

// props: 외부에서 컴포넌트로 전달한 속성

function Header(props) {

  // props로 전달한 title 값 꺼내기
  console.log('props', props.title);

  // JSX에서 {}중괄호는 문자열이 아니라 표현식으로 처리된다
  return <header>
  <h1><a href='/'>{props.title}</a></h1>
  </header>
}

// props의 topics 배열을 사용하여 목록을 생성한다
function Nav(props) {

  const lis = [];

  // 배열의 요소를 하나씩 사용하여 동적으로 <li> 태그를 생성한다
  for(let t of props.topics){
    console.log(t);

    // 각 li 요소에 key 속성을 부여해야 한다
    // 리액트에서는 각 항목을 추적하기 위해 key가 반드시 있어야 한다 (없으면 에러남)
    lis.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>)
  }

  // 생성된 li 태그들을 렌더링
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

  // topics 배열 생성
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'},
  ];

  return (
    <div className="App">
      {/* Header 컴포넌트에 title 속성을 전달 */}
      <Header title="REACT"></Header>
      {/* Nav 컴포넌트에 topics 배열을 props로 전달 (topics="topics"로 쓰면 문자열로 전달됨) */}
      <Nav topics={topics}></Nav>
      {/* Article 컴포넌트를 사용하여 다양한 형태의 콘텐츠를 생성 */}
      <Article title="Welcome" body="Hello, Web"></Article>
      <Article title="Hi" body="Hello, React"></Article>
    </div>
  );
}

export default App;

// 컴포넌트를 사용하면 여러 코드를 독립적인 부품으로 만들 수 있다
// 이를 통해 페이지의 복잡성을 낮추고, 코드의 재사용성을 높일 수 있다