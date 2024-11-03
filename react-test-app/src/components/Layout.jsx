import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import styled from "styled-components";

const LayoutContainer = styled.div`
  background-color: #e9ecef;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Layout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
};

export default Layout;