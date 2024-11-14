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

    // 게시물 리스트를 저장하기 위한 state 선언
    const [list, setList] = useState([]);

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

      // state가 변경될 때마다 API가 호출되어 무한 루프
      setList(list);

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