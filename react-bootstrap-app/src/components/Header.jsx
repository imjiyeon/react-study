import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15) !important;
`;

const Header = () => {
  return (
    <HeaderContainer>
      {/* Navbar 클래스 삭제 */}
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/login">로그인</Nav.Link>
                <Nav.Link href="/logout">로그아웃</Nav.Link>
                <Nav.Link href="/register">회원가입</Nav.Link>
                <Nav.Link href="/">홈</Nav.Link>
                <Nav.Link href="/board/list">게시물관리</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </HeaderContainer>
  )
}

export default Header;
