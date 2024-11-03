import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';
import { CustomCard, CustomContainer } from '../components/Styles';


const Login = () => {

  return (
    <CustomCard>
      <CustomContainer>
        <h3>로그인</h3>
        <Form.Group controlId="board.title">
          <Form.Label>아이디</Form.Label>
          <Form.Control type="text"></Form.Control>
        </Form.Group>
        <Form.Group controlId="board.content">
          <Form.Label>패스워드</Form.Label>
          <Form.Control type="password"></Form.Control>
        </Form.Group>
        <Button variant="secondary">로그인</Button>
      </CustomContainer>
    </CustomCard>
  );
}

export default Login