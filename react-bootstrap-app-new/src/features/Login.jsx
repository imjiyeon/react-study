import React from 'react'
import { CustomCard, CustomContainer } from '../components/Styles'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// 로그인 화면을 반환하는 컴포넌트

const Login = () => {
  return (
    <CustomCard>
      <CustomContainer>
        <h3>로그인</h3>
        <Form>
          <Form.Group className="mb-3" controlId="member.id">
            <Form.Label>아이디</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="member.password">
            <Form.Label>패스워드</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            로그인
          </Button>
        </Form>
      </CustomContainer>
    </CustomCard>
  )
}

export default Login