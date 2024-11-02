// rafce => 자동완성
import React from 'react'
import styled from "styled-components";

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

let board = {no:1, title:'1번', content:'1번입니다'}

function BoardDetail() {

  return (
    <>
      { board!==null && 
      <>
        <BoardTitle>{board.title}</BoardTitle>
        <BoardContent>{board.content}</BoardContent>
      </>
      }
    </>
  );
};

export default BoardDetail;