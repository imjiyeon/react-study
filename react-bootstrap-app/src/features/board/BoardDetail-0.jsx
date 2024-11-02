import { fetchBoardDetail } from "../../api/BoardAPI";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function BoardDetail(){

    const params = useParams();
    console.log(params);

    const navigate = useNavigate();

    // 게시물 데이터를 변수에 저장
    let board;

    const apicall = async () => {
        const response = await fetchBoardDetail(params.boardNo);
        if (response) {
          board = response;
        }
    }
    apicall();
    // 문제점: API 호출이 비동기적으로 이루어지기 때문에
    // 데이터를 받기 전에 화면이 먼저 렌더링되어 아무것도 안나옴

    return (
        <div>
            { board == null ? <></> :  
                <div>
                    <div>
                        <div>{board.no}</div>
                        <div>{board.title}</div>
                        <div>{board.content}</div>
                        <div>{board.writer}</div>
                        <div>{board.regDate}</div>
                        <div>{board.modDate}</div>
                    </div>
                    
                    <button onClick={ ()=>{ navigate(`/modify/${board.no}`) } }>수정</button>
                </div>
            }
        </div>
     
    );
}

export default BoardDetail;