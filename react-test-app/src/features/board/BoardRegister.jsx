import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// 컴포넌트의 상태와 관련되 함수는 컴포넌트 안에 선언하는 것이 좋다
// 컴포넌트와 상관없는 일반함수는 외부에 선언하는 것이 좋다

function BoardRegister() {

  const navigate = useNavigate();

  const [board, setBoard] = useState({
      title: '',
      content: ''
  });

  // 훅은 일반함수에서 사용할 수 없음
  // 컴포넌트 함수에서만 사용 가능

  const handleChange = (e) => {
    // event.target 객체에서 key값으로 name과 value만 가져오기
    const { name, value } = e.target;

    // 새로운 게시물 만들기
    // 기존 게시물을 분해하고, 변경된 필드 추가
    const newBoard = {
      ...board,
      [name]: value
    };
        
    setBoard(newBoard);
    console.log(newBoard);
  };

  const handleSubmit = async (e) => {
    // 링크 이동 방지
    e.preventDefault();

    const response = await axios.post(
      'http://localhost:8080/board/register',
      board,
      {
        headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3Mjk5OTc4MTcsImV4cCI6MTczMjU4OTgxNywic3ViIjoidXNlciJ9.HqR1aDDicHD2cE-0KAFiFRBCbZvXxcqVxb4XdsOmFKk',
      }
    });

    if (response.status !== 201) {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    } else {
      navigate('/list');
    }

  };

  return (
    <div>
      <h2>Create</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <input type="text" name="title" placeholder='title' onChange={handleChange}></input>
        </p>
        <p>
          <textarea name='content' placeholder='content' onChange={handleChange}></textarea>
        </p>
        <p>
          <input type="submit" value='등록'></input>
        </p>
      </form>
    </div>
  )
}

export default BoardRegister;
