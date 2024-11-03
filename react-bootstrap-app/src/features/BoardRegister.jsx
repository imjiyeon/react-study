import styled from 'styled-components';
// bootstrap에서 가져오기
import { Form, Button } from 'react-bootstrap';
import { CustomCard } from '../components/CustomCard';

const BoradContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px; /* 자식 요소들의 간격 */
`;

const BoardRegister = () => {
  // controlId는 아무 값이나 입력하면 자동으로 label과 input에 설정됨
  return (
    <CustomCard>
      <BoradContainer>
        <h3>게시물 등록</h3>
        <Form.Group controlId="board.title">
          <Form.Label>제목</Form.Label>
          <Form.Control type="text"></Form.Control>
        </Form.Group>
        <Form.Group controlId="board.content">
          <Form.Label>내용</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="secondary">등록</Button>{' '}
      </BoradContainer>
    </CustomCard>
  );
}

export default BoardRegister