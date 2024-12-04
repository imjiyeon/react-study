import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';

// styled: React에서 css문법을 사용할수있도록 도와주는 기능
// 태그이름 + 백틱`

const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  background-color: white;
  /* flex 컨테이너 */
  display: flex;
  align-items: center;
  /* 그림자의 위치. x축 y축  아래쪽으로 0.5rem만큼 */
  /* 흐림정도 */
  /* 그림자 색상과 불투명도15% */
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);
`;

export const Header = () => {
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
            {/* href 속성을 사용하면 페이지 전환시 전체 페이지를 새로고침하여 스토어가 초기화됨 */}
            {/* href속성 대신 to속성을 사용하고, as속성에 NavLink를 설정해야함 */}
            {/* <Nav.Link as={NavLink} to="/login">로그인</Nav.Link>
            <Nav.Link as={NavLink} to="/logout">로그아웃</Nav.Link>
            <Nav.Link as={NavLink} to="/register">회원가입</Nav.Link>
            <Nav.Link as={NavLink} to="/">홈</Nav.Link>
            <Nav.Link as={NavLink} to="/board/list">게시물관리</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </HeaderContainer>
  )
}

export default Header