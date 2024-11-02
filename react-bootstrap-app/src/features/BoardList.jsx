// rafce => 자동완성
import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`;

const BoardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  cursor: pointer;
`;

const BoardTitle = styled.h4`
  font-weight: 400;
  font-size: 18px;
  color: #4D4D4D;
  text-align: left;
  margin-bottom: 20px;
`;

const BoardContent = styled.p`
  font-weight: 700;
  font-size: 20px;
  color: #000;
  text-align: left;
`;

let data = [
  {no:1, title:'1번', content:'1번입니다'},
  {no:2, title:'2번', content:'2번입니다'},
  {no:3, title:'3번', content:'3번입니다'},
];

function BoardList() {

  return (
    <ListContainer>
    { data.map((board)=>{
      return (
      <BoardWrapper>
        <Link to={'/board/read/'+board.no}><BoardTitle>{board.no}</BoardTitle></Link>
        <BoardTitle>{board.title}</BoardTitle>
        <BoardContent>{board.content}</BoardContent>
      </BoardWrapper>
      )
    })}
    </ListContainer>
  );
};

export default BoardList;