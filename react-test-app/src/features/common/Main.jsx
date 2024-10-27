import { NavLink } from 'react-router-dom';

function Main() {
 
  return (
    <div>
      <h2>메인</h2>

      <ul>
        <li><NavLink to='/list'>list</NavLink></li>
        <li><NavLink to='/register'>register</NavLink></li>
        <li><NavLink to='/memberregister'>회원가입</NavLink></li>
        <li><NavLink to='/login'>로그인</NavLink></li>
      </ul>

    </div>
  )
}

export default Main;
