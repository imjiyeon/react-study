import { Form, Button } from 'react-bootstrap';
import { CustomCard, CustomContainer } from '../components/Styles';

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

async function fetchBoardDetail(boardNo){

  const response = await axios.get(`http://localhost:8080/board/read?no=${boardNo}`, {
    headers: {
      Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3Mjk5MzExMTEsImV4cCI6MTczMjUyMzExMSwic3ViIjoidXNlciJ9.EHky-YCdi307UYFCYUdmRxqPOQEnyNn8D4sYoHqiKD8',
    }
  });
  if (response.status !== 200) {
    throw new Error(`api error: ${response.status} ${response.statusText}`);
  } 

  return response.data;
}

const BoardModify = () => {

  const params = useParams();

  const navigate = useNavigate();

  const [board, setBoard] = useState(null);

  const apicall = async () => {
        const response = await fetchBoardDetail(params.no);
        if (response) {
          setBoard(response);
        }
  }

    useEffect(()=>{
        apicall();
    }, []);

    // 입력필드에 값을 변경해도 값이 바뀌지 않는다
    // 필드에 연결된 state가 바뀌지 않았기 때문이다
    // 값이 입력될 때마다 이벤트 함수를 호출하여 state를 변경한다
    const handleChange = (e) => {
      const {name, value} = e.target;
      const newBoard = {
        ...board,
        [name]: value
      }
      setBoard(newBoard);
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const response = await axios.put(
        'http://localhost:8080/board/modify',
        board,
        {
          headers: {
          Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3Mjk5OTc4MTcsImV4cCI6MTczMjU4OTgxNywic3ViIjoidXNlciJ9.HqR1aDDicHD2cE-0KAFiFRBCbZvXxcqVxb4XdsOmFKk',
        }
      });
  
      if (response.status !== 204) {
        throw new Error(`api error: ${response.status} ${response.statusText}`);
      } else {
        navigate(`/board/read/${board.no}`);
      }

    };

    const handleRemove = async () => {
      const no = board.no;

      const response = await axios.delete(
        `http://localhost:8080/board/remove?no=${no}`,
        {
          headers: {
          Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3Mjk5OTc4MTcsImV4cCI6MTczMjU4OTgxNywic3ViIjoidXNlciJ9.HqR1aDDicHD2cE-0KAFiFRBCbZvXxcqVxb4XdsOmFKk',
        }
      });
  
      if (response.status !== 204) {
        throw new Error(`api error: ${response.status} ${response.statusText}`);
      } else {
        navigate('/board/list');
      }
      
    }

        // board데이터가 없는데 프로퍼티를 꺼내서 사용하면 에러가 발생함
    // 삼항연산자를 사용하여 board 데이터가 null이면 빈태그를 반환하고, 아니면 폼태그를 반환
    

  return (
    <CustomCard>
      <CustomContainer>
        <h3>게시물 수정</h3>{
           
        board!==null &&   

        <form onSubmit={handleSubmit}>
        <Form.Group controlId="board.title">
          <Form.Label>제목</Form.Label>
          <Form.Control type="text" name='title' value={board.title} onChange={handleChange}></Form.Control>
        </Form.Group>
        <Form.Group controlId="board.content">
          <Form.Label>내용</Form.Label>
          <Form.Control as="textarea" rows={3} name='content' value={board.content} onChange={handleChange}/>
        </Form.Group>
        <Form.Group controlId="board.writer">
          <Form.Label>작성자</Form.Label>
          <Form.Control type="text" value={board.writer} disabled ></Form.Control>
        </Form.Group>
        <Form.Group controlId="board.regDate">
            <Form.Label>등록일</Form.Label>
            <Form.Control type="text" value={board.regDate} disabled readOnly></Form.Control>
        </Form.Group>   
        <Form.Group controlId="board.modDate">
            <Form.Label>수정일</Form.Label>
            <Form.Control type="text" value={board.modDate} disabled readOnly></Form.Control>
        </Form.Group>  
        <Button variant="secondary" type='submit'>수정</Button>
        <Button variant="secondary" onClick={handleRemove}>삭제</Button>
        </form>
        }
      </CustomContainer>
    </CustomCard>
  )
}

export default BoardModify