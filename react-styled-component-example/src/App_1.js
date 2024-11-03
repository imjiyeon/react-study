import './App.css';
// npm으로 스타일드 컴포넌트 설치: npm install styled-components
// styled-components 패키지에서 styled 함수 가져오기

// import styled 까지만 입력한 후, 자동 완성
import styled from 'styled-components';

// 스타일드 컴포넌트란? 컴포넌트를 만들때 CSS를 그대로 작성할 수 있도록 도와주는 가능

// 스타일드 컴포넌트를 사용한 코드
// ``백틱을 붙여주기
// const StyledButton = styled.button``;

// 색상 추가하기
// 백틱안에 css 스타일을 그대로 작성할 수 있음
const SimpleButton = styled.button`
  color: white;
  background-color: green;
`;

// styled 함수를 사용하여 SimpleButton 상속받아 새로운 컴포넌트를 생성
// SimpleButton가 가지고 있는 스타일들을 물려받음
const LargeButton = styled(SimpleButton)`
  font-size: 50px;
`;

// 컴포넌트에서 전달받은 props를 보면 className라는 값이 있음
// className는 스타일드 컴포넌트에서 사용하는 클래스
// 전달받은 className를 버튼 태그에 추가하면 스타일이 적용됨
const ReactButton = (props) => {
  console.log(props);
  return <button className={props.className} >{props.children}</button>
}

// 일반적인 방법으로 만든 컴포넌트를 상속받기
// ReactLargeButton을 보면 폰트크기가 적용이 안됨
const ReactLargeButton = styled(ReactButton)`
  font-size: 50px;
`;

// App 컴포넌트 수정
function App() {
  return (
    <div>
      <SimpleButton>Simple</SimpleButton>
      <LargeButton>Large</LargeButton>
      <ReactButton>React</ReactButton>
      <ReactLargeButton>React Large</ReactLargeButton>
    </div>
  );
}

export default App;
