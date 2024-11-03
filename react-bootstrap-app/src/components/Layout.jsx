import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import styled from "styled-components";

// 아이템들을 세로방향으로 배치
// 아이템들을 가로방향에서 가운데 정렬
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