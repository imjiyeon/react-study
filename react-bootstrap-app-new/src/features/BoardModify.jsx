import React from 'react'
import { CustomCard, CustomContainer } from '../components/Styles'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// 게시물 수정 화면: 상세화면과 같이 게시물의 모든 내용이 표시
// 수정 가능한 필드와 수정 불가능한 필드를 구분
// 번호, 제목, 내용, 작성자, 등록일, 수정일
// 번호: 데이터 식별자라서 수정하면 안됨
// 작성자: 로그인하면 자동으로 id가 입력됨
// 등록일: 등록일은 처음 입력되고 다음부터는 수정 안됨
// 수정일: 수정시 현재시간으로 자동으로 입력됨
// 수정화면: 상세화면과 등록화면의 특징을 모두 가지고 있음!

const BoardModify = () => {

  // 게시물 데이터
  const board = { no:1, title:'1번', content:'1번입니다', writer:'둘리', regDate:'2024-11-08', modDate:'2024-11-08' }

  return (
    <CustomCard>
      <CustomContainer>
        <h3>게시물 수정</h3>
        { 
          board!==null && 
          <Form>
            <Form.Group className="mb-3" controlId="board.no">
              <Form.Label>번호</Form.Label>
              <Form.Control type="text" value={board.no} readOnly/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="board.title">
              <Form.Label>제목</Form.Label>
              <Form.Control type="text" value={board.title}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="board.content">
              <Form.Label>내용</Form.Label>
              <Form.Control as="textarea" rows={3} value={board.content}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="board.writer">
              <Form.Label>작성자</Form.Label>
              <Form.Control type="text" value={board.writer} readOnly/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="board.regDate">
              <Form.Label>등록일</Form.Label>
              <Form.Control type="text" value={board.regDate} readOnly/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="board.modDate">
              <Form.Label>수정일</Form.Label>
              <Form.Control type="text" value={board.modDate} readOnly/>
            </Form.Group>
            <Button variant="primary" type="submit">
              저장
            </Button>
            <Button variant="danger">삭제</Button>
          </Form>        
        }
      </CustomContainer>
    </CustomCard>
  )
}

export default BoardModify