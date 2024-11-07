import { Form, Button } from 'react-bootstrap';
import { CustomCard, CustomContainer } from '../components/Styles';

// API 호출을 위해 각 입력필드에 name 추가

const Register = () => {
  return (
    <CustomCard>
        <CustomContainer>
          <form>
            <h3>회원가입</h3>
            {/* Form 가져오기 */}
            {/* Form.Group -> <div> */}
            {/* controlId -> label과 input의 id 설정됨 -> 라벨을 누르면 입력필드에 포커싱됨 */}
            <Form.Group className="mb-3" controlId="member.id">  {/* controlId: 다른 필드와 중복안되게 */}
              {/* Form.Label -> <label> */}
              {/* Form.Control -> <input> */}
              <Form.Label>아이디</Form.Label> 
              <Form.Control type="text" name="id"></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="member.password">
              <Form.Label>비밀번호</Form.Label>
              <Form.Control type="password" name="password"></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="member.name">
                <Form.Label>이름</Form.Label>
                <Form.Control type="text" name="name"></Form.Control>
            </Form.Group>
            {/* Form - Checks and radios 가져오기 */}
            <Form.Group className="mb-3">
              {/* name,value 추가 */}
              {/* Form.Check -> <lable> + <input> */}
              <Form.Check type="radio" name="role" id="member.role1" label="사용자" value="ROLE_USER" />
              <Form.Check type="radio" name="role" id="member.role2" label="관리자" value="ROLE_ADMIN" />
            </Form.Group>
            {/* Components > Buttons 색 변경하기 */}
            <Button variant="primary" type="submit">
              등록
            </Button>
          </form>
        </CustomContainer>
    </CustomCard>
  )
}

export default Register