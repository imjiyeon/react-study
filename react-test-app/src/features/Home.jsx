import React from 'react'
import { CustomCard, CustomContainer } from '../components/Styles';
import { useSelector } from 'react-redux';


const Home = () => { 

  const memberInfo = useSelector((state) => state.member.info);

  return (
    <CustomCard>
      <CustomContainer>
        <h3>Home</h3>
        {
          memberInfo!==null && `안녕하세요. ${memberInfo.name} 님`
        }
      </CustomContainer>
    </CustomCard>
  );
}

export default Home