import { useSelector, useDispatch } from 'react-redux';

export function Counter() {

  const dispatch = useDispatch();

  // counter 슬라이스에서 value값 가져오기
  // 상위 객체로 counter가 생김
  // state에서 counter 아래 있는 value를 꺼내야함
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
  

