/* 레이아웃에서 사용할 헤더 */

import { useNavigate } from "react-router-dom";
import { selectMember } from "../store/memberSlice";
import {useSelector, useDispatch} from 'react-redux';
import { logoutSuccess } from "../store/memberSlice";

// 로그인 여부에 따라 메뉴 표시
function Header() {

    const dispatch = useDispatch();

    // 페이지 이동시 사용하는 함수
    const navigate = useNavigate();

    // 리덕스에서 제공하는 훅으로, 스토어에서 상태 가져오기
    const member = useSelector(selectMember);

    return (
    <div>
        {
            member === null ? 
            <>
                <button onClick={()=>{ navigate('/login') }}>login</button>
            </> 
            :
            <>
            <button onClick={()=>{ 
                dispatch(logoutSuccess());
                navigate('/');
             }}>logout</button>
            </> 
        }
        {
            member !== null && member.role === 'ROLE_USER' && 
                <> 
                <button onClick={()=>{ navigate('/list') }}>boardlist</button>       
                </>
        }
        {
            member !== null && member.role === 'ROLE_ADMIN' && 
                <> 
                <button onClick={()=>{ navigate('/list') }}>memberlist</button>          
                </>
        }  

    </div>
    );
}

export default Header;
