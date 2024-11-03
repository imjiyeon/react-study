import { fetchBoardDetail } from "../../api/BoardAPI";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function BoardDetail(){

    const params = useParams();
    console.log(params);

    const navigate = useNavigate();

    // 게시물 데이터를 저장하기 위한 state 선언
    const [board, setBoard] = useState();

    const apicall = async () => {
        // 그 안에서 api함수 호출
        const response = await fetchBoardDetail(params.boardNo);
        if (response) {
          console.log(response);
          setBoard(response);
        }
    }
    apicall(); // API가 무한으로 호출됨

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