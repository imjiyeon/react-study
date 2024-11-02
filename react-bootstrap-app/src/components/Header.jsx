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
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/login">login</Nav.Link>
              <Nav.Link href="/logout">logout</Nav.Link>
              <Nav.Link href="/register">register</Nav.Link>
              <Nav.Link href="/">home</Nav.Link>
              <Nav.Link href="/board/list">board</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </HeaderContainer>
  )
}

export default Header;