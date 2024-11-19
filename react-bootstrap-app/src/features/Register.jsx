import React from 'react'
import { CustomCard, CustomContainer } from '../components/Styles'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// 회원가입 화면을 반환하는 컴포넌트

const Register = () => {
  return (

    <CustomCard>
      <CustomContainer>
      <h3>회원가입</h3>
      <Form>
        <Form.Group className="mb-3" controlId="member.id">
          <Form.Label>아이디</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="member.password">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="member.name">
          <Form.Label>이름</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
        {/* 사용자 권한 -> 옵션 -> 라디오버튼 */}
        <Form.Group className="mb-3" controlId="member.role">
          <Form.Check
            type="radio"
            label="사용자" /* 밖으로 표시되는 이름 */
            id="member.role1"
            name="role"
            value="ROLE_USER" /* 서버에 전달되는 실제 값 */
          />
          <Form.Check
            type="radio"
            label="관리자"
            id="member.role2"
            name="role"
            value="ROLE_ADMIN"
          />
        </Form.Group>
        {/* 일반 버튼X submit 버튼은 특별한 기능이 있음 */}
        {/* 폼데이터를 서버에 전달하는 역할 */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      </CustomContainer>
    </CustomCard>
    
  )
}

export default Register