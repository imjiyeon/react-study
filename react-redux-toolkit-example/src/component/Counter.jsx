import { useSelector, useDispatch } from 'react-redux';

export function Counter() {

  const dispatch = useDispatch();

  const count = useSelector((state)=>state.counter.value);

  return (
    // dispatch에서 type 변경 (슬라이스 이름/액션)
    <div>
      <button onClick={() => {
        dispatch({ type: 'counterSlice/up', step: 2 });
      }} >+</button> {count}
    </div>
  );
}
  