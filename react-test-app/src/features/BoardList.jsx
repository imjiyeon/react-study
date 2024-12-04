import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import { CustomCard, CustomContainer } from '../components/Styles';
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import { Context } from '../index';
import { useContext } from 'react';

const Row = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr;
`;

// let data = [
//   {no:1, title:'1번', content:'1번입니다', writer: '둘리'},
//   {no:2, title:'2번', content:'2번입니다', writer: '또치'},
//   {no:3, title:'3번', content:'3번입니다', writer: '도우너'},
// ];

function BoardList(){

    const token = useSelector((state) => state.member.token);

    const navigate = useNavigate();

    const [list, setList] = useState([]);

    // 컨텍스트에서 host 데이터 가져오기
    const { host } = useContext(Context);

      // 컴포넌트가 로드될때 한번만 API를 호출하기 위해 useEffect를 사용!
  // 인자: 실행할 코드, 실행주기(빈배열은 한번만 실행한다는 의미)
    
    // 상태만 변경하려면 useState를 사용하면됨
    // 하지만 컴포넌트가 렌더링될때 데이터 로드가 필요한 경우에는 useEffect를 함께써야함
    // useEffect: 훅으로 BoardList 컴포넌트가 생성될 때 데이터를 가져오기위해 사용
    useEffect(() => {
      // fetchBoardList 비동기 함수를 호출하기 위해 await을 써야하는데
      // useEffect 안에서 바로 쓸수가 없어서 비동기함수를 한번더 만들고 사용

      // 함수정의
      const apicall = async () => {
        // const response = await axios.get('http://localhost:8080/board/list', {
        // const response = await axios.get('http://3.35.231.182:8080/board/list', {
        const response = await axios.get(`${host}/board/list`, {
            headers: {
              Authorization: token
            }
          });
          if (response.status !== 200) {
            throw new Error(`api error: ${response.status} ${response.statusText}`);
          }
        
        setList(response.data); // 데이터를 상태에 저장
      };
      // 함수호출
      apicall(); 
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