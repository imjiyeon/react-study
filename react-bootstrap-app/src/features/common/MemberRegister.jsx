/* 회원가입 */

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MemberRegister() {

  const navigate = useNavigate();

  const [member, setMember] = useState({
      id: '',
      password: '',
      name: '',
      role: 'ROLE_USER'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    const newMember = {
      ...member,
      [name]: value
    };
        
    setMember(newMember);
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const response = await axios.post(
      'http://localhost:8080/register',
      member
    );

    if (response.status !== 201) {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    } else {
      navigate('/login');
    }

  };

  return (
    <div>
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <input type="text" name="id" placeholder='id' onChange={handleChange}></input>
        </p>
        <p>
          <input name='password' placeholder='password' onChange={handleChange}></input>
        </p>
        <p>
          <input name='name' placeholder='이름' onChange={handleChange}></input>
        </p>
        <p>
          <input name='role' placeholder='등급' onChange={handleChange} value='ROLE_USER'></input>
        </p>
        <p>
          <input type="submit" value='등록'></input>
        </p>
      </form>
    </div>
  )
}

export default MemberRegister;
