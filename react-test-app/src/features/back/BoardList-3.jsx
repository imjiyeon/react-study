import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import { CustomCard, CustomContainer } from '../../components/Styles';

import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Row = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr;
`;

function BoardList(){

    const token = useSelector((state) => state.member.token);

    const navigate = useNavigate();

    const [list, setList] = useState([]);

    useEffect(()=>{
        const getData = async () => {

            const response = await axios.get('http://localhost:8080/board/list', {
                headers: {
                  Authorization: token
                }
              });
              if (response.status !== 200) {
                throw new Error(`api error: ${response.status} ${response.statusText}`);
              }
              setList(response.data);
          };
          getData();

    }, []) //빈배열을 넣어서 처음 렌더링 때만 호출

    // 1. useEffect를 사용하면 처음에 화면이 렌더링되고
    // 2. useEffect 안에 있는 apicall이 실행되고
    // 3. setState로 화면이 다시 렌더링 되면서 board 데이터가 출력됨
    // 처음 렌더링 될때: 화면에 데이터 없음
    // 두번째로 렌더링 될때: 화면에 데이터 있음

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