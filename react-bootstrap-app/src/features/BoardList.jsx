// rafce => 자동완성
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import { CustomCard, CustomContainer } from '../components/Styles';
import { useNavigate } from "react-router-dom";

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
                        
            {/* data가 있는지 확인 */}
            {/* 논리곱 연산자는 첫번째항이 false면 두번째항을 사용하지 않는다 */}
            {/* 만약 data가 없는데 map함수를 호출하면 nullpoint 에러남 */}

            {/* map함수로 게시물데이터를 <tr> 행으로 생성 */}
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
            </CustomContainer>
        </CustomCard>
    );
}

export default BoardList;