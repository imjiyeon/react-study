import './App.css';
import styled from 'styled-components';

const SimpleButton = styled.button`
  color: white;
  background-color: green;
`;

const LargeButton = styled(SimpleButton)`
  font-size: 50px;
`;

// const ReactButton = (props) => {
//   return <button>{props.children}</button>
// }

const ReactButton = (props) => {
  console.log(props);
  return <button className={props.className} >{props.children}</button>
}

const ReactLargeButton = styled(ReactButton)`
  font-size: 50px;
`;

// const PrimaryButton = styled.button`
//   color: white;
// `;

// 컴포넌트에서 전달받은 prop에 따라 색상 설정하기
// ${} 안에 함수를 정의하면, 함수가 반환하는 값이 color로 설정됨
const PrimaryButton = styled.button`
  color: ${function (props) {
    console.log('props', props);
    if (props.primary) {
      return 'white';
    } else {
      return 'black';
    }
  }}
`;

// App 컴포넌트 수정
function App() {
  return (
    <div>
      <p>
        <SimpleButton>Simple</SimpleButton>
        <LargeButton>Large</LargeButton>
      </p>
      <p>
        <ReactButton>React</ReactButton>
        <ReactLargeButton>React Large</ReactLargeButton>
      </p>
      <p>
        <PrimaryButton>Normal</PrimaryButton>
        <PrimaryButton primary>Primary</PrimaryButton>
      </p>
    </div>
  );
}
// SimpleButton 컴포넌트로 생성된 태그를 보면 클래스이름이 추가되어 있음
// LargeButton 컴포넌트를 보면 SimpleButton에 있던 클래스도 있고, 새로운 클래스도 추가됨

export default App;
