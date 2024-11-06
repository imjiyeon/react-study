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

// Outlet: 중첩 라우트를 설정
// 부모 컴포넌트에서 자식 컴포넌트의 위치를 지정
// <Outlet />이 위치한 자리에 자식 라우트가 렌더링됨
// 예: / => Layout 컴포넌트 렌더링
// /home => Home 컴포넌트가 <Outlet /> 위치에 표시
function Layout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
};

export default Layout;