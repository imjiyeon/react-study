import { useSelector, useDispatch } from 'react-redux';
// 카운터 슬라이스 가져오기
import counterSlice from '../counterSlice';

export function Counter() {

  const dispatch = useDispatch();

  const count = useSelector((state) => {
    return state.counter.value
  });

  return (
    
    <div>
      <button onClick={() => {

        // 리덕스 툴킷의 액션 함수 사용하기
        // dispatch -> counterSlice.actions.up(2)
        // 디스패치에 직접 액션타입을 넘기지 않고 up이라는 함수를 호출
        
        // 액션의 구조가 간단해짐
        // { 타입, 작업데이터 } => 타입은 함수로 작업데이터는 인자로 처리
        
        dispatch(counterSlice.actions.up(2)); // 액션함수

      }} >+</button> {count}
    </div>
  );
}
  