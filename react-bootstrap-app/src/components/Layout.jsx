import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

// styled 컴포넌트를 사용해서 div 태그 생성
const LayoutContainer = styled.div`
  background-color: #e9ecef;
  display: flex;
  /* 수직방향으로 배치 (수평 or 수직) */
  flex-direction: column;
  /* 반대방향(수평)으로는 중앙에 정렬 */
  align-items: center;
`;

// Outlet: 중첩 라우트를 설정
// 부모 컴포넌트에서 자식 컴포넌트의 위치를 지정
// <Outlet />이 위치한 자리에 자식 라우트가 렌더링됨
// 예: / => Layout 컴포넌트 렌더링
// /home => Home 컴포넌트가 <Outlet /> 위치에 표시
const Layout = () => {
  return (
    <LayoutContainer>
      <Header></Header>
      <Outlet></Outlet>
    </LayoutContainer>
  )
}

export default Layout