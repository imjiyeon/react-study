// rafce => 자동완성
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import { CustomCard } from '../components/CustomCard';
import { useNavigate } from "react-router-dom";

const BoardListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// 아이템을 비율로 배치
const Row = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr;
`;

let data = [
  {no:1, title:'1번', content:'1번입니다', writer: '둘리'},
  {no:2, title:'2번', content:'2번입니다', writer: '또치'},
  {no:3, title:'3번', content:'3번입니다', writer: '도우너'},
];

function BoardList(){

    const navigate = new useNavigate();

    return (
        <CustomCard>
            <BoardListContainer>
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
                            data.map((board)=>{
                                return <tr>
                                    <td><Link to={'/board/read/'+board.no}>{board.no}</Link></td>
                                    <td>{board.title}</td>
                                    <td>{board.writer}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>
            </BoardListContainer>
        </CustomCard>
    );
}

export default BoardList;