import { useDispatch } from 'react-redux';

// 리덕스 도구들
// useDispatch: 상태를 변경하는 함수

// Right3에 있는 버튼을 클릭하면 Left3에 있는 num이 변경되도록 구현하기!

export const Right1 = () => {

  console.log('Right1...');

  return (
    <div>
      <h1>Right1</h1>
      <Right2></Right2>
    </div>
  );
}

const Right2 = () => {

  console.log('Right2...');

  return (
    <div>
      <h1>Right2</h1>
      <Right3></Right3>
    </div>
  );
}

// +버튼을 클릭하면 num(state)가 변경되고, 
// state를 사용하는 Left3 컴포넌트도 다시 렌더링됨
const Right3 = () => {

  console.log('Right3...');

  // redux 스토어에서 dispatch 함수 가져오기
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Right3</h1>
      <input 
      type='button' 
      value='+' 
      onClick={()=>{

        // 디스패치로 'PLUS' 액션을 전달
        dispatch({ type : 'PLUS'});
      }}>
      </input>
    </div>
  );
}