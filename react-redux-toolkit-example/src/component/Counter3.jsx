import { useSelector, useDispatch } from 'react-redux';
// 슬라이스 가져오기
import { counterSlice } from '../App3';

export function Counter() {

  const dispatch = useDispatch();

  const count = useSelector((state) => {
    console.log(state);
    return state.counter.value
  });

  return (
    
    <div>
      <button onClick={() => {
        // 리덕스 툴킷에서 생성해주는 액션 함수 사용하기
        dispatch(counterSlice.actions.up(2));

      }} >+</button> {count}
    </div>
  );
}
  