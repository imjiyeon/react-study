import { useSelector, useDispatch } from 'react-redux';

export function Counter() {

  const dispatch = useDispatch();

  // counter 슬라이스에서 value값 가져오기
  // counter는 counterSlice의 초기값
  const count = useSelector((state) => {
    console.log(state);
    return state.counter.value
  });

  return (
      <div>
        <button onClick={() => {
        // dispatch에서 type 변경 (슬라이스 이름/액션)
        dispatch({ type: 'counterSlice/up', step: 2 });
        }} >+</button>
        {count}
      </div>
  );
}
  

