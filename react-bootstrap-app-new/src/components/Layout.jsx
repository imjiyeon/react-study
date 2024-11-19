import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const LayoutContainer = styled.div`
  background-color: #e9ecef;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Layout = () => {
  return (
    <LayoutContainer>
      <Header></Header>
      <Outlet></Outlet>
    </LayoutContainer>
  )
}

export default Layout