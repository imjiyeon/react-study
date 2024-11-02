import styled from 'styled-components';

// 배경
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: relative;
  width: 1150px;
  height: 830px;
`;

// 카드
export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  width: 80%;
  height: 80%;
  background: #ffffff;
  border-radius: 16px;
`;

// 폼
export const CustomForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  gap: 24px;
  width: 100%;
  height: 644px;  
`;

// 입력필드와 라벨을 감싸는 박스
export const Autobox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px;
  gap: 8px;
  font-weight: 900;
  font-size: 20px;
  line-height: 29px;
  color: #111111;
  width: 100%;
  height: 82px;
`;

// 라벨
export const CommonInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px;
  width: 100%;
  height: 29px;
  box-sizing: border-box;
`;

// 입력필드
export const CommonInput = styled.input`
  box-sizing: border-box;
  padding: 8px;
  font-size: 16px;
  width: 100%;
  height: 45px;
  background: #ffffff;
  border: 1px solid rgba(145, 145, 145, 0.5);
  border-radius: 8px;
`;

// 버튼
export const CommonBtn = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  height: 64px;
  background: #5fb393;
  border: none;
  border-radius: 8px;
  flex: none;
  order: 5;
  align-self: stretch;
  font-weight: 900;
  font-size: 20px;
  color: #ffffff;
  &:hover {
    background:  #5FB393;
    color: black;
    transition: 0.7s;
  }
`;

export const InfoStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  width: 490px;
  height: 29px;
`;

// 리스트
const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
  overflow-y: auto;
  max-height: 734px;
  height: 100%;
  padding-right: 4px;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`;