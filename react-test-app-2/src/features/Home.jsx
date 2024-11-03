import React from 'react'
import { CustomCard, CustomContainer } from '../components/Styles';
import { useSelector } from 'react-redux';


const Home = () => { 

  const member = useSelector((state) => state.member.member);

  return (
    <CustomCard>
      <CustomContainer>
        <h3>Home</h3>
        {
          member!==null && `안녕하세요. ${member.name} 님`
        }
      </CustomContainer>
    </CustomCard>
  );
}

export default Home