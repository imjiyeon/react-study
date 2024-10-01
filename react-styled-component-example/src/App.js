import logo from './logo.svg';
import './App.css';
// npm으로 스타일드 컴포넌트 설치: npm install styled-components
// styled-components 패키지에서 styled 함수 가져오기
import { styled } from 'styled-components';

// 스타일드 컴포넌트란? 컴포넌트를 만들때 CSS를 그대로 작성할 수 있도록 도와주는 가능

// 스타일드 컴포넌트를 사용하지 않은 코드
// const ReactButton = (props) => {
//   // css를 자바스크립트 스타일로 작성해야함
//   // background-color -> backgroundColor
//   const style = {
//     color: 'white',
//     backgroundColor: 'purple'
//   }
//   // 버튼 태그 생성하고 반환
//   return <button style={style}>{props.children}</button>
// }

// 컴포넌트에서 전달받은 props를 보면 className라는 값이 있음
// className는 스타일드 컴포넌트에서 사용하는 클래스
// 전달받은 className를 버튼 태그에 추가하면 스타일이 적용됨
const ReactButton = (props) => {
  console.log(props);
  return <button className={props.className} >{props.children}</button>
}

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

// 일반적인 방법으로 만든 컴포넌트를 상속받기
// ReactLargeButton을 보면 폰트크기가 적용이 안됨
const ReactLargeButton = styled(ReactButton)`
  font-size: 50px;
`;

// const PrimaryButton = styled.button`
//   color: white;
// `;

// 컴포넌트에서 전달받은 prop에 따라 색상 설정하기
// ${} 안에 함수를 정의하면, 함수가 반환하는 값이 color로 설정됨
const PrimaryButton = styled.button`
  color: ${function(props){
    console.log('props', props);
    if(props.primary){
      return 'white';
    }else{
      return 'black';
    }
  }}
`;

// App 컴포넌트 수정
function App() {
  return (
    <div>
      {/* <ReactButton>React</ReactButton> */}
      <SimpleButton>Simple</SimpleButton>
      <LargeButton>Large</LargeButton>
      <ReactLargeButton>React Large</ReactLargeButton>
      <PrimaryButton>Normal</PrimaryButton>
      <PrimaryButton primary>Primary</PrimaryButton>
    </div>
  );
}
// SimpleButton 컴포넌트로 생성된 태그를 보면 클래스이름이 추가되어 있음
// LargeButton 컴포넌트를 보면 SimpleButton에 있던 클래스도 있고, 새로운 클래스도 추가됨

export default App;
