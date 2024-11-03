import React from 'react'
import styled from 'styled-components';
import { CustomCard } from '../components/CustomCard';

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Home = () => { 
  return (
    <CustomCard>
      <HomeContainer>
        Home
      </HomeContainer>
    </CustomCard>
  );
}

export default Home