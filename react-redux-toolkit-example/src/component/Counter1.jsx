import { useSelector, useDispatch } from 'react-redux';

export function Counter() {

    // 디스패처 가져오기
    const dispatch = useDispatch();
  
    // 스토어에서 value값 가져오기
    const count = useSelector(state => state.value);
  
    return (
      <div>
        <button onClick={() => {
          // dispatch에 'UP'타입과 증가시킬 값 전달
          dispatch({ type: 'up', step: 2 });
        }} >+</button>
        {count} {/* 상태값을 출력 */}
      </div>
    );
}
  