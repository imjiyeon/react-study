/* 레이아웃에서 사용할 헤더 */

import { useNavigate } from "react-router-dom";
import { selectMember } from "../store/memberSlice";

import {useSelector} from 'react-redux';

// 로그인 여부에 따라 메뉴 표시
function Header() {

    const navigate = useNavigate();

    const member = useSelector(selectMember);
    
    return (
    <div>
        {
            member? 
            <>
                <button onClick={()=>{ navigate('/login') }}>login</button>
            </> 
            : 
            <> 
                <button onClick={()=>{ navigate('/list') }}>boardlist</button>
                <button onClick={()=>{ navigate('/list') }}>memberlist</button>
                <button onClick={()=>{ navigate('/logout') }}>logout</button> 
            </>
        }
    </div>
    );
}

export default Header;
