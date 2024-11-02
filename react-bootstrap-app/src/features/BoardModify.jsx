import React from 'react'
import { Container, Inner } from '../components/Style';
import { Autobox, CommonInfo, InfoStyle, CommonInput, CommonBtn, CustomForm } from '../components/Style';

const BoardModify = () => {
  return (
  <Container>
    <Inner>
      <CustomForm>
            <Autobox>
              <CommonInfo>
                <InfoStyle>제목</InfoStyle>
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
                <InfoStyle>내용</InfoStyle>
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
                등록
              </CommonBtn>
            </>
      </CustomForm>      
    </Inner>
  </Container>
  )
}

export default BoardModify