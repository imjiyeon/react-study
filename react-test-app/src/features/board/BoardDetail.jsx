import { fetchBoardDetail } from "../../api/BoardAPI";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function BoardDetail(){

    // URL 경로에 포함된 파라미터 꺼내기
    const params = useParams();
    console.log(params);

    const navigate = useNavigate();

    // 게시물 데이터를 가져온 후에 컴포넌트를 렌더링할기 위해 state선언
    const [board, setBoard] = useState();

    // 비동기 함수를 호출하려면 다시 await을 사용해야함
    // 다시 비동기 함수 선언
    const apicall = async () => {
        // 그 안에서 api함수 호출
        const response = await fetchBoardDetail(params.boardNo);
        if (response) {
          console.log(response);
          setBoard(response);
        }
    }
    // apicall(); //에러남!!!
    // 문제점: API 호출이 비동기적으로 이루어지기 때문에
    // 데이터를 받기 전에 화면이 먼저 렌더링되어 board.no로 값을 꺼내면 에러가 발생함

    // 1. useEffect를 사용하면 처음에 화면이 렌더링되고
    // 2. useEffect 안에 있는 apicall이 실행되고
    // 3. setState로 화면이 다시 렌더링 되면서 board 데이터가 출력됨
    // 처음 렌더링 될때: 화면에 데이터 없음
    // 두번째로 렌더링 될때: 화면에 데이터 있음

    useEffect(()=>{
        apicall();
    }, []); //빈배열을 넣어서 처음 렌더링 때만 호출

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