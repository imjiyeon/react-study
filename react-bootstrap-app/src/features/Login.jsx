import React from 'react'
import { Container, Inner } from '../components/Style';
import { Autobox, CommonInfo, InfoStyle, CommonInput, CommonBtn, CustomForm } from '../components/Style';

const Login = () => {
  return (
  <Container>
    <Inner>
      <CustomForm>
            <Autobox>
              <CommonInfo>
                <InfoStyle>아이디</InfoStyle>
              </CommonInfo>
              <CommonInput
                type=""
                name=""
                value=""
                onChange=""
              />
            </Autobox>

            <Autobox>
              <CommonInfo>
                <InfoStyle>패스워드</InfoStyle>
              </CommonInfo>
              <CommonInput
                type=""
                name=""
                value=""
                onChange=""
              />
            </Autobox>

            <>
              <CommonBtn type="submit" onClick="">
                로그인
              </CommonBtn>
            </>
      </CustomForm>      
    </Inner>
  </Container>
  )
}

export default Login