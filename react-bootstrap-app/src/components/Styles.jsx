import styled from "styled-components";

// 카드
export const CustomCard = styled.div`
  display: flex;
  flex-direction: column; /* 수직방향으로 배치 */
  justify-content: center; /* 반대방향(수평방향)으로는 중앙에 정렬 */
  align-items: center;
  padding: 24px;
  width: 1150px;
  height: 600px;
  margin: 50px;
  background: #ffffff;
  border-radius: 16px; /* 모서리 둥굴게 */
  border: none;
  /* 그림자 위치 x축, y축, 흐림정도(퍼지는거), 그림자의 색상과 투명도(%) */
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15); 
`;
// 1rem = 16px

export const CustomContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;


