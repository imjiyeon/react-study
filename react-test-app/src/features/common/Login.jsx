/* 로그인 */

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../store/memberSlice";

function Login() {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [user, userUser] = useState({
      id: '',
      password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    const newMember = {
      ...user,
      [name]: value
    };
        
    userUser(newMember);
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const response = await axios.post(
      'http://localhost:8080/login',
      user
    );

    if (response.status === 200) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      
      // 리듀서 호출
      dispatch(loginSuccess(response.data.user));

      navigate('/');
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }

  };

  return (
    <div>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <input type="text" name="username" placeholder='username' onChange={handleChange}></input>
        </p>
        <p>
          <input type="password" name='password' placeholder='password' onChange={handleChange}></input>
        </p>
        <p>
          <input type="submit" value='로그인'></input>
        </p>
      </form>
    </div>
  )
}

export default Login;
