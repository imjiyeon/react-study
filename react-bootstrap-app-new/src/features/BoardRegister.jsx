import React from 'react'
import { CustomCard, CustomContainer } from '../components/Styles'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const BoardRegister = () => {

  return (
    <CustomCard>
      <CustomContainer>
        <h3>게시물 등록</h3>
        <Form>
          <Form.Group className="mb-3" controlId="board.title">
            <Form.Label>제목</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="board.content">
            <Form.Label>내용</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="primary" type="submit">
            등록
          </Button>
        </Form>
      </CustomContainer>
    </CustomCard>
  )
}

export default BoardRegister