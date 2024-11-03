import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';
import { CustomCard } from '../components/CustomCard';

const RegisterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Register = () => {
  return (
    <CustomCard>
        <RegisterContainer>
            <h3>회원가입</h3>
            <Form.Group controlId="member.id">
            <Form.Label>아이디</Form.Label>
            <Form.Control type="text"></Form.Control>
            </Form.Group>
            <Form.Group controlId="member.password">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control type="password"></Form.Control>
            </Form.Group>
            <Button variant="secondary">로그인</Button>{' '}
        </RegisterContainer>
    </CustomCard>
  )
}

export default Register