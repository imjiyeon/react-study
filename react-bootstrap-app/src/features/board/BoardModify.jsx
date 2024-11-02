import { fetchBoardDetail } from "../../api/BoardAPI";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function BoardModify(){

  const params = useParams();

  const navigate = useNavigate();

    const [board, setBoard] = useState();

    const apicall = async () => {
        const response = await fetchBoardDetail(params.boardNo);
        if (response) {
          console.log(response);
          setBoard(response);
        }
    }

    useEffect(()=>{
        apicall();
    }, []);

    // 입력필드에 값을 변경해도 값이 바뀌지 않는다
    // 필드에 연결된 state가 바뀌지 않았기 때문이다
    // 값이 입력될 때마다 이벤트 함수를 호출하여 state를 변경한다
    const handleChange = (e) => {
      const {name, value} = e.target;
      const newBoard = {
        ...board,
        [name]: value
      }
      setBoard(newBoard);
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const response = await axios.put(
        'http://localhost:8080/board/modify',
        board,
        {
          headers: {
          Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3Mjk5OTc4MTcsImV4cCI6MTczMjU4OTgxNywic3ViIjoidXNlciJ9.HqR1aDDicHD2cE-0KAFiFRBCbZvXxcqVxb4XdsOmFKk',
        }
      });
  
      if (response.status !== 204) {
        throw new Error(`api error: ${response.status} ${response.statusText}`);
      } else {
        navigate('/detail');
      }

    };

    const handleRemove = async () => {
      const no = board.no;

      const response = await axios.delete(
        `http://localhost:8080/board/remove?no=${no}`,
        {
          headers: {
          Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3Mjk5OTc4MTcsImV4cCI6MTczMjU4OTgxNywic3ViIjoidXNlciJ9.HqR1aDDicHD2cE-0KAFiFRBCbZvXxcqVxb4XdsOmFKk',
        }
      });
  
      if (response.status !== 204) {
        throw new Error(`api error: ${response.status} ${response.statusText}`);
      } 
      
    }

    // board데이터가 없는데 프로퍼티를 꺼내서 사용하면 에러가 발생함
    // 삼항연산자를 사용하여 board 데이터가 null이면 빈태그를 반환하고, 아니면 폼태그를 반환
    return (
    <div>
      <h2>Modify</h2>
      { board == null ? <></> : 
      <form onSubmit={handleSubmit}>
        <p>
          <input type="text" name="no" value={board.no} placeholder='no' readOnly></input>
        </p>
        <p>
          <input type="text" name="title" value={board.title} placeholder='title' onChange={handleChange}></input>
        </p>
        <p>
          <textarea name='content' value={board.content} placeholder='content' onChange={handleChange}></textarea>
        </p>
        <p>
          <input type="text" name="writer" value={board.writer} placeholder='writer' readOnly></input>
        </p>
        <p>
          <input type="text" name="regDate" value={board.regDate} placeholder='regDate' readOnly></input>
        </p>
        <p>
          <input type="text" name="modDate" value={board.modDate} placeholder='modDate' readOnly></input>
        </p>
        <p> 
          <input type="submit" value='저장'></input>
        </p>
      </form>
      }

      <button onClick={handleRemove}>삭제</button>
    </div>
    )

}

export default BoardModify;