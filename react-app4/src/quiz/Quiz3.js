// 중첩된 컴포넌트 구조 만들기

function Content() {
  return <div>Content Component</div>;
}

function Section() {
  return (
    <div>
      <h2>Section Component</h2>
      <Content />
      <Content />
    </div>
  );
}

function App() {
  return (
    <div>
      <Section />
      <Section />
    </div>
  );
}

export default App;
