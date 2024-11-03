import { Form, Button } from 'react-bootstrap';
import { CustomCard,CustomContainer } from '../components/Styles';

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const BoardRegister = () => {
  
  const navigate = useNavigate();

  const [board, setBoard] = useState({
    title: '',
    content: '',
    uploadFile: ''
});

// 훅은 일반함수에서 사용할 수 없음
// 컴포넌트 함수에서만 사용 가능

const handleChange = (e) => {
  // event.target 객체에서 key값으로 name, value, file 꺼내기
  const { name, value, files } = e.target;

  // 새로운 게시물 만들기
  // 기존 게시물을 분해하고, 변경된 필드 추가
  let newBoard = null;

  if(name === 'uploadFile'){
    newBoard = {
      ...board,
      [name]: files[0]
    };
  } else {
    newBoard = {
      ...board,
      [name]: value
    };
  }
      
  setBoard(newBoard);
};

const handleSubmit = async (e) => {
  // 링크 이동 방지
  e.preventDefault();

  // 파일은 JSON으로 보내면 제대로 전송이 안됨
  // FormData 객체 생성하여 폼데이터로 보내야함
  const formData = new FormData();
  formData.append("title", board.title);
  formData.append("content", board.content);
  formData.append("uploadFile", board.uploadFile);

  const response = await axios.post(
    'http://localhost:8080/board/register',
    formData,
    {
      headers: {
      Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3Mjk5OTc4MTcsImV4cCI6MTczMjU4OTgxNywic3ViIjoidXNlciJ9.HqR1aDDicHD2cE-0KAFiFRBCbZvXxcqVxb4XdsOmFKk',
    }
  });

  if (response.status !== 201) {
    throw new Error(`api error: ${response.status} ${response.statusText}`);
  } else {
    navigate('/board/list');
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