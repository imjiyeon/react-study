import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';
import { CustomCard, CustomContainer } from '../components/Styles';


const BoardModify = () => {
  return (
    <CustomCard>
      <CustomContainer>
        <h3>게시물 수정</h3>
        <form>
        <Form.Group controlId="board.title">
          <Form.Label>제목</Form.Label>
          <Form.Control type="text" name='title'></Form.Control>
        </Form.Group>
        <Form.Group controlId="board.content">
          <Form.Label>내용</Form.Label>
          <Form.Control as="textarea" rows={3} name='content'/>
        </Form.Group>
        <Form.Group controlId="board.content">
          <Form.Label>작성자</Form.Label>
          <Form.Control type="text"disabled readOnly></Form.Control>
        </Form.Group>
        <Form.Group controlId="board.regDate">
            <Form.Label>등록일</Form.Label>
            <Form.Control type="text" disabled readOnly></Form.Control>
        </Form.Group>   
        <Form.Group controlId="board.modDate">
            <Form.Label>수정일</Form.Label>
            <Form.Control type="text" disabled readOnly></Form.Control>
        </Form.Group>  
        <Button variant="secondary" type='submit'>수정</Button>
        </form>
      </CustomContainer>
    </CustomCard>
  )
}

export default BoardModify