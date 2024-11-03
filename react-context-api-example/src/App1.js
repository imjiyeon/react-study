import './App.css';

// Sub1 컴포넌트를 만들고 root div에 추가
function Sub1() {
  return (
    <div>
      <h1>Sub1</h1>
      <Sub2></Sub2>
    </div>
  );
}

// Sub2 컴포넌트를 만들고 Sub1에 추가
function Sub2() {
  return (
    <div>
      <h1>Sub2</h1>
      <Sub3></Sub3>
    </div>
  );
}

// Sub3 컴포넌트를 만들고 Sub2에 추가
function Sub3() {
  return (
    <div>
      <h1>Sub3</h1>
    </div>
  );
}

function App() {
  // h태그 추가하고 div 태그의 클래스 이름 변경
  return (
    <div className="root">
      <h1>Hello World!</h1>
      <Sub1></Sub1>
    </div>
  );
}

export default App;
