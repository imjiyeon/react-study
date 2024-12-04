import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from "../store/memberSlice";

const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15) !important;
`;

const Header = () => {

  const dispatch = useDispatch();

  // 페이지 이동시 사용하는 함수
  const navigate = useNavigate();

  // 스토어에서 상태값 가져오기
  // member 슬라이스의 사용자 정보 info를 선택
  const memberInfo = useSelector((state) => {
    console.log(state); // root 아래 member가 있음
    return state.member.info
  });

  return (
    <HeaderContainer>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            {/* 삼항 연산자를 사용하여 회원 정보 여부에 따라 메뉴 표시 */}
            {
              memberInfo === null ? 
              <>
                <Nav.Link as={NavLink} to="/register">회원가입</Nav.Link>
                <Nav.Link as={NavLink} to="/login">로그인</Nav.Link>
              </> 
              :
              // 디스패치를 사용하여 logout 액션함수를 호출
              <>
              <Nav.Link onClick={()=>{ 
                  dispatch(logout());
                  navigate('/');
              }}>로그아웃</Nav.Link>
              <Nav.Link as={NavLink} to="/">홈</Nav.Link>
              </> 
            }
            {
              memberInfo !== null && memberInfo.role === 'ROLE_USER' && 
              <Nav.Link as={NavLink} to="/board/list">게시물관리</Nav.Link>
            }
            {
              memberInfo !== null && memberInfo.role === 'ROLE_ADMIN' &&
              <>
              <Nav.Link as={NavLink} to="/board/list">게시물관리</Nav.Link>
              <Nav.Link as={NavLink} to="/board/list">회원관리</Nav.Link>
              </>
            }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </HeaderContainer>
  )
}

export default Header;
