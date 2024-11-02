import { fetchBoardDetail } from "../../api/BoardAPI";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

// 브라우저 보안 정책으로 인해 외부에 있는 파일(c:\\uploadfile)을 가지고 올 수 없음
// S3를 사용하기 전에, 임시로 업로드 파일을 React 프로젝트 안에 저장할 것

// public 아래 images 폴더
const IMG_PATH = '/images/';

function BoardDetail(){

    const params = useParams();
    console.log(params);

    const navigate = useNavigate();

    const [board, setBoard] = useState();

    const apicall = async () => {
        const response = await fetchBoardDetail(params.boardNo);
        if (response) {
          console.log(response);
          setBoard(response);
        }
    }

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
                        <img src={`${IMG_PATH}${board.imgPath}`}></img>
                    </div>
                    
                    <button onClick={ ()=>{ navigate(`/modify/${board.no}`) } }>수정</button>
                </div>
            }
        </div>
     
    );
}

export default BoardDetail;