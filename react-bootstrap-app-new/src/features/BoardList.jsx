import React from 'react'
import { CustomCard, CustomContainer } from '../components/Styles'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

const data = [
  { no:1, title:'1번', content:'1번입니다', writer:'둘리', regDate:'2024-11-08', modDate:'2024-11-08' },
  { no:2, title:'2번', content:'2번입니다', writer:'또치', regDate:'2024-11-09', modDate:'2024-11-09' },
  { no:3, title:'3번', content:'3번입니다', writer:'도우너', regDate:'2024-11-10', modDate:'2024-11-10' }
];

const BoardList = () => {

  const navigate = useNavigate();

  return (
    <CustomCard>
      <CustomContainer>
        <Row>
            <Col sm={8}>
              <h3>게시물 리스트</h3>
            </Col>
            <Col sm={4}>
              <Button variant="secondary" onClick={ ()=>{
                navigate('/board/register');
              } } >게시물 등록</Button>
            </Col>
        </Row>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>제목</th>
              <th>작성자</th>
              <th>등록일</th>
            </tr>
          </thead>
          <tbody>
            {
              data !== null && data.map( (board)=>{
                return (
                      <tr key={board.no}>
                        <td><Link to={ '/board/read/'+board.no  }>{board.no}</Link></td>
                        <td>{board.title}</td>
                        <td>{board.writer}</td>
                        <td>{board.regDate}</td>
                      </tr>
                );
              })
            }
          </tbody>
        </Table>

      </CustomContainer>
    </CustomCard>
  )
}

export default BoardList