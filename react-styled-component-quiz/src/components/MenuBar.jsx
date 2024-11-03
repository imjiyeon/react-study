import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const MenuBarDiv = styled.div`
  background-color: gainsboro;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
`;

const MenuBar = () => (
  <MenuBarDiv>
    <NavLink to="/">
      Home
    </NavLink>
    <NavLink to="/about">
      About
    </NavLink>
    <NavLink to="/contact">
      Contact
    </NavLink>
  </MenuBarDiv>
);

export default MenuBar;
