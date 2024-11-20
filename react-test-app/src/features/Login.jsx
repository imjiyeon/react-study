import { Form, Button } from 'react-bootstrap';
import { CustomCard, CustomContainer } from '../components/Styles';

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/memberSlice";
import axios from "axios";

import { Context } from '../index';
import { useContext } from 'react';

const Login = () => {
  
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [user, setUser] = useState({});

  // 컨텍스트에서 host 데이터 가져오기
  const { host } = useContext(Context);

  const handleChange = (e) => {
    const { name, value } = e.target;

    const newMember = {...user};
    newMember[name] = value;
        
    setUser(newMember);
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const response = await axios.post(
      `${host}/login`,
      user
    );

    // 로그인에 성공했으면, 응답받은 토큰과 회원정보를 state에 업데이트
    // 메인화면으로 이동
    if (response.status === 200) {
      // 디스패치를 사용하여 login 액션함수를 호출 => 리듀서 실행
      dispatch(login(response.data));
      navigate('/');
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }

  };

  return (
    <CustomCard>
      <CustomContainer>
        <h3>로그인</h3>
        <form onSubmit={handleSubmit}>
        <Form.Group controlId="board.title">
          <Form.Label>아이디</Form.Label>
          <Form.Control type="text" name="id" onChange={handleChange}></Form.Control>
        </Form.Group>
        <Form.Group controlId="board.content">
          <Form.Label>패스워드</Form.Label>
          <Form.Control type="password" name="password" onChange={handleChange}></Form.Control>
        </Form.Group>
        <Button variant="secondary" type="submit">로그인</Button>
        </form>
      </CustomContainer>
    </CustomCard>
  );
}

export default Login