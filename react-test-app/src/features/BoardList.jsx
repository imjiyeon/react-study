import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import { CustomCard, CustomContainer } from '../components/Styles';

import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Row = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr;
`;

// let data = [
//   {no:1, title:'1번', content:'1번입니다', writer: '둘리'},
//   {no:2, title:'2번', content:'2번입니다', writer: '또치'},
//   {no:3, title:'3번', content:'3번입니다', writer: '도우너'},
// ];

// api 호출을 위해 비동기 함수 정의
async function fetchBoardList(){

    const response = await axios.get('http://localhost:8080/board/list', {
      headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3Mjk5MzExMTEsImV4cCI6MTczMjUyMzExMSwic3ViIjoidXNlciJ9.EHky-YCdi307UYFCYUdmRxqPOQEnyNn8D4sYoHqiKD8',
      }
    });
    if (response.status !== 200) {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }
  
    return response.data;
}

function BoardList(){

    const navigate = useNavigate();

    const [list, setList] = useState([]);
    
    // 상태만 변경하려면 useState를 사용하면됨
    // 하지만 컴포넌트가 렌더링될때 데이터 로드가 필요한 경우에는 useEffect를 함께써야함
    // useEffect: 훅으로 BoardList 컴포넌트가 생성될 때 데이터를 가져오기위해 사용
    useEffect(() => {
      // fetchBoardList 비동기 함수를 호출하기 위해 await을 써야하는데
      // useEffect 안에서 바로 쓸수가 없어서 비동기함수를 한번더 만들고 사용
      const getData = async () => {
        const data = await fetchBoardList();
        setList(data); // 데이터를 상태에 저장
      };
      getData(); // async 함수 호출
    }, []);

    return (
        <CustomCard>
            <CustomContainer>
                <Row>
                    <h3>게시물 목록</h3>
                    <Button variant="primary" onClick={()=>{
                        navigate('/board/register');
                    }}>게시물 등록</Button>
                </Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>제목</th>
                            <th>작성자</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list&& list.map((board)=>{
                                return <tr>
                                    <td><Link to={'/board/read/'+board.no}>{board.no}</Link></td>
                                    <td>{board.title}</td>
                                    <td>{board.writer}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>
            </CustomContainer>
        </CustomCard>
    );
}

export default BoardList;