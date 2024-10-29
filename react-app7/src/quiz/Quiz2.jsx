import { useState } from 'react';

// 글자 수를 세는 앱 만들기

function App() {

  // 글자 수를 state로 저장
  const [charCount, setcharCount] = useState(0);

  const handleChange = (event) => {
    let text = event.target.value;
    setcharCount(text.length); // 입력된 텍스트 업데이트
  };

  return (
    <div>
      <input type="text" onChange={handleChange} placeholder="텍스트를 입력하세요" />
      <p>글자 수: {charCount}</p>
    </div>
  );
}

export default App;
