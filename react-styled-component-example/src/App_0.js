import './App.css';

// 스타일드 컴포넌트를 사용하지 않은 코드

const ReactButton = (props) => {
  // css를 자바스크립트 스타일로 작성해야함
  // background-color -> backgroundColor
  const style = {
    color: 'white',
    backgroundColor: 'purple'
  }
  // 버튼 태그 생성하고 반환
  return <button style={style}>{props.children}</button>
}

// App 컴포넌트 수정
function App() {
  return (
    <div>
      <ReactButton>React</ReactButton>
    </div>
  );
}

export default App;
