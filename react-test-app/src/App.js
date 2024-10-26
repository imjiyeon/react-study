import './App.css';
import axios from "axios";
import { useState, useEffect } from "react";
import { Route, Routes, NavLink } from 'react-router-dom';

// api 호출을 위해 비동기 함수 정의
async function fetchBoardList(){

  const response = await axios.get('http://localhost:8080/board/list', {
    headers: {
      Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3Mjk5MzExMTEsImV4cCI6MTczMjUyMzExMSwic3ViIjoidXNlciJ9.EHky-YCdi307UYFCYUdmRxqPOQEnyNn8D4sYoHqiKD8',
    }
  });
  if (response.status !== 200) {
    throw new Error(`api error: ${response.status} ${response.statusText}`);
  }

  return response.data;
}

function BoardList(){

  const [list, setList] = useState([]);

  // useEffect: 훅으로 BoardList 컴포넌트가 생성될 때 데이터를 가져오기위해 사용
  useEffect(() => {
    // fetchBoardList 비동기 함수를 호출하기 위해 await을 써야하는데
    // useEffect 안에서 바로 쓸수가 없어서 비동기함수를 한번더 만들고 사용
    const getData = async () => {
      const data = await fetchBoardList();
      setList(data); // 데이터를 상태에 저장
    };
    getData(); // async 함수 호출
  }, []);

  return (
      <table>
        <thead>
          <tr>
            <th>게시물번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>등록일</th>
          </tr>
        </thead>
        <tbody>
          {
            list && list.map((board)=>
              (
                <tr key={board.no}>
                  <td>{board.no}</td>
                  <td>{board.title}</td>
                  <td>{board.writer}</td>
                  <td>{board.regDate}</td>
                </tr>
              )
            )
          }
        </tbody>
      </table>
  );
}

// useEffect(() => { 

// }, [] );

function App() {

  // fetchBoardList();

  return (
    <div>
      <BoardList></BoardList>
      
      {/* <ul>
        <li><NavLink to='/list'>list</NavLink></li>
        <li><NavLink to='/register'>register</NavLink></li>
        <li><NavLink to='/detail'>detail</NavLink></li>
      </ul>  */}

      {/* <Routes>
        <Route path='/list' element={<List />}></Route>
        <Route path='/topics/*' element={<Topics />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes> */}

    </div>
  );
}

export default App;
