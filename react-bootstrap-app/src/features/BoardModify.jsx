import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';
import { CustomCard, CustomContainer } from '../components/Styles';


const BoardModify = () => {
  return (
    <CustomCard>
      <CustomContainer>
        <h3>게시물 수정</h3>
        <Form.Group controlId="board.title">
          <Form.Label>제목</Form.Label>
          <Form.Control type="text"></Form.Control>
        </Form.Group>
        <Form.Group controlId="board.content">
          <Form.Label>내용</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="secondary">수정</Button>{' '}
      </CustomContainer>
    </CustomCard>
  )
}

export default BoardModify