import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
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

  // 리덕스에서 제공하는 훅으로, 스토어에서 상태 가져오기
  const memberInfo = useSelector((state) => state.member.info);

  return (
    <HeaderContainer>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            {
              memberInfo === null ? 
              <>
                <Nav.Link href="/register">회원가입</Nav.Link>
                <Nav.Link href="/login">로그인</Nav.Link>
              </> 
              :
              <>
              <Nav.Link onClick={()=>{ 
                  dispatch(logout());
                  navigate('/');
              }}>로그아웃</Nav.Link>
              <Nav.Link href="/">홈</Nav.Link>
              </> 
            }
            {
              memberInfo !== null && memberInfo.role === 'ROLE_USER' && 
              <Nav.Link href="/board/list">게시물관리</Nav.Link>
            }
            {
              memberInfo !== null && memberInfo.role === 'ROLE_ADMIN' &&
              <>
              <Nav.Link href="/board/list">게시물관리</Nav.Link>
              <Nav.Link href="/board/list">회원관리</Nav.Link>
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
