import { Form, Button } from 'react-bootstrap';
import { CustomCard,CustomContainer } from '../components/Styles';

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from 'react-redux';

import { Context } from '../index';
import { useContext } from 'react';


const BoardRegister = () => {
  
  const token = useSelector((state) => state.member.token);
  
  const navigate = useNavigate();

  const [board, setBoard] = useState({});

// 훅은 일반함수에서 사용할 수 없음
// 컴포넌트 함수에서만 사용 가능

// 컨텍스트에서 host 데이터 가져오기
const { host } = useContext(Context);

// const handleChange = (e) => {
//   // event.target 객체에서 key값으로 name, value 꺼내기
//   const { name, value } = e.target;

//   // 새로운 게시물 만들기
//   // 기존 게시물을 분해하고, 변경된 필드 추가
//   let newBoard = { ...board };

//   newBoard[name] = value;
      
//   setBoard(newBoard);
// };

const handleChange = (e) => {
  const { name, value, files } = e.target;

  let newBoard = { ...board };

  if(name === 'uploadFile'){
    newBoard[name] = files[0]
  } else {
    newBoard[name] = value;
  }
      
  setBoard(newBoard);
};

const handleSubmit = async (e) => {
  // 링크 이동 방지
  e.preventDefault();

  /* 나중에 수정 */
  // 파일은 JSON으로 보내면 제대로 전송이 안됨
  // FormData 객체 생성하여 폼데이터로 보내야함
  const formData = new FormData();
  formData.append("title", board.title);
  formData.append("content", board.content);
  formData.append("uploadFile", board.uploadFile);

  // 게시물 등록 API 호출
  // 등록은 post
  // 인자: 주소, 파라미터, 헤더
  const response = await axios.post(
    // 'http://localhost:8080/board/register',
    `${host}/board/register`,
    // board,
    formData,
    {
      headers: {
      Authorization: token
    }
  });

  if (response.status === 201) {
    navigate('/board/list');
  } else {
    throw new Error(`api error: ${response.status} ${response.statusText}`);
  }

};

  return (
    <CustomCard>
      <CustomContainer>
        <h3>게시물 등록</h3>
        <form onSubmit={handleSubmit}>
        <Form.Group controlId="board.title">
          <Form.Label>제목</Form.Label>
          <Form.Control type="text" name="title" onChange={handleChange}></Form.Control>
        </Form.Group>
        <Form.Group controlId="board.content">
          <Form.Label>내용</Form.Label>
          <Form.Control as="textarea" rows={3} name="content" onChange={handleChange}/>
        </Form.Group>
        <Form.Group controlId="board.uploadFile">
          <Form.Label>이미지</Form.Label>
          <Form.Control type="file" multiple name="uploadFile" onChange={handleChange}/>
        </Form.Group>
        <Button variant="secondary" type='submit'>등록</Button>
        </form>
      </CustomContainer>
    </CustomCard>
  );
}

export default BoardRegister