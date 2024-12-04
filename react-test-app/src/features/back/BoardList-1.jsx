import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import { CustomCard, CustomContainer } from '../components/Styles';

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

    // 리스트를 변수에 저장
    let list;

    // 게시물 리스트 API 호출
    const getData = async () => {

        // axios: ajax, fetch와 같은 통신 함수
        // 메소드 방식에 따라 get post 메소드 사용
        // 인자: 주소, 헤더 + 파라미터
        const response = await axios.get('http://localhost:8080/board/list', {
            headers: {
              Authorization: token
            }
          });
          if (response.status === 200) {
            list = response.data;
          } else {
            throw new Error(`api error: ${response.status} ${response.statusText}`);
          }
          
      };
      getData();
    // 문제점: API 호출이 비동기적으로 이루어지기 때문에
    // 데이터를 받기 전에 화면이 먼저 렌더링되어 아무것도 안나옴

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