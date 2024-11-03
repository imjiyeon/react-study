// rafce => 자동완성
import { CustomCard, CustomContainer } from '../components/Styles';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";


function BoardDetail() {

  const navigate = new useNavigate();
  
  let board = {no:1, title:'1번', content:'1번입니다', writer:'둘리', regDate:'', modDate:''}

  return (
        <CustomCard>
            <CustomContainer>
                <h3>게시물 상세</h3>
                {
                  board !==null &&
                  <>
                    <Form.Group controlId="board.title">
                      <Form.Label>제목</Form.Label>
                      <Form.Control type="text" value={board.title} disabled readOnly></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="board.content">
                      <Form.Label>내용</Form.Label>
                      <Form.Control as="textarea" rows={3} value={board.content} disabled readOnly/>
                    </Form.Group>
                    <Form.Group controlId="board.content">
                      <Form.Label>작성자</Form.Label>
                      <Form.Control type="text" value={board.writer} disabled readOnly></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="board.content">
                      <Form.Label>등록일</Form.Label>
                      <Form.Control type="text" value={board.regDate} disabled readOnly></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="board.content">
                      <Form.Label>수정일</Form.Label>
                      <Form.Control type="text" value={board.modDate} disabled readOnly></Form.Control>
                    </Form.Group>
                    <Button variant="primary" onClick={()=>{
                        navigate(`/board/modify/ + ${board.no}`);
                    }}>게시물 수정</Button>
                  </>
                }
            </CustomContainer>
        </CustomCard>
    );
  };

export default BoardDetail;