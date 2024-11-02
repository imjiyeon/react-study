import React from 'react'
import { Container, Inner } from '../components/Style';
import { Autobox, CommonInfo, InfoStyle, CommonInput, CommonBtn, CustomForm } from '../components/Style';

const Register = () => {
  return (
  <Container>
    <Inner>
      <CustomForm>
        <Autobox>
              <CommonInfo>
                <InfoStyle>ID</InfoStyle>
              </CommonInfo>
              <CommonInput
                type="text"
                name="memId"
                value=""
                onChange=""
                disabled=""
              />
            </Autobox>

            <Autobox>
              <CommonInfo>
                <InfoStyle>Password</InfoStyle>
              </CommonInfo>
              <CommonInput
                type="password"
                name="memPwd"
                value=""
                onChange=""
              />
            </Autobox>

            <Autobox>
              <CommonInfo>
                <InfoStyle>Name</InfoStyle>
              </CommonInfo>
              <CommonInput
                type="text"
                name="memName"
                value=""
                onChange=""
              />
            </Autobox>

            <>
              <CommonBtn type="submit" onClick="">
                Sign Up
              </CommonBtn>
            </>
      </CustomForm>      
    </Inner>
  </Container>
  )
}

export default Register