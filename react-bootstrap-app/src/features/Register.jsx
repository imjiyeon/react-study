import { Form, Button } from 'react-bootstrap';
import { CustomCard, CustomContainer } from '../components/Styles';


const Register = () => {
  return (
    <CustomCard>
        <CustomContainer>
          <form>
            <h3>회원가입</h3>
            <Form.Group controlId="member.id">
            <Form.Label>아이디</Form.Label>
            <Form.Control type="text" name="id"></Form.Control>
            </Form.Group>
            <Form.Group controlId="member.password">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control type="password" name="password"></Form.Control>
            </Form.Group>
            <Form.Group controlId="member.name">
                <Form.Label>이름</Form.Label>
                <Form.Control type="text" name="name"></Form.Control>
            </Form.Group>
            <Form.Group controlId="member.role">
            <Form.Check value="ROLE_USER" type="radio" name="role" id="role1" label="사용자" onChange="" checked/>
            <Form.Check value="ROLE_ADMIN" type="radio" name="role" id="role2" label="관리자" onChange=""/>
            </Form.Group>
            <Button variant="secondary" type='submit'>로그인</Button>
          </form>
        </CustomContainer>
    </CustomCard>
  )
}

export default Register