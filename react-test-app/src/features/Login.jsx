import { Form, Button } from 'react-bootstrap';
import { CustomCard, CustomContainer } from '../components/Styles';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/memberSlice";

const Login = () => {
  
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [user, setUser] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    const newMember = {
      ...user,
      [name]: value
    };
        
    setUser(newMember);
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const response = await axios.post(
      'http://localhost:8080/login',
      user
    );

    if (response.status === 200) {
      // 리듀서 호출
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