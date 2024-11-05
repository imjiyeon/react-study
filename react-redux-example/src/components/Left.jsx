import { useSelector } from 'react-redux';

// 리덕스 도구들
// useSelector: 스토어를 조회하는 함수

// Left1, Left2, Left3 컴포넌트 만들고 계층 구조로 설정

export const Left1 = () => {
  return (
    <div>
      <h1>Left1</h1>
      <Left2></Left2>
    </div>
  );
}

const Left2 = () => {
  return (
    <div>
      <h1>Left2</h1>
      <Left3></Left3>
    </div>
  );
}

// Left3에 num state 표시하기
const Left3 = () => {
  
  // redux 스토어의 state 중에서 num 꺼내기
  const num = useSelector(state => {
    console.log('state 목록:' + JSON.stringify(state)); //obj -> json str
    return state.num
  });

  // const num = useSelector(state => state.num);

  return (
    <div>
      {/* 꺼낸 state 출력 */}
      <h1>Left3 : {num}</h1>
    </div>
  );
}