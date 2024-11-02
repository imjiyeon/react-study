import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Main() {

  const member = useSelector((state) => state.member.member);
 
  return (
    <div>
      <h2>메인</h2>
      {
        member!==null && `안녕하세요. ${member.name} 님`
      }

    </div>
  )
}

export default Main;
