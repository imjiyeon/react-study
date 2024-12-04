import { CustomCard, CustomContainer } from '../components/Styles';
import { Form, Button } from 'react-bootstrap';

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import { useSelector } from 'react-redux';

import { Context } from '../index';
import { useContext } from 'react';

// 브라우저 보안 정책으로 인해 외부에 있는 파일(c:\\uploadfile)을 가지고 올 수 없음
// S3를 사용하기 전에, 임시로 업로드 파일을 React 프로젝트 안에 저장할 것

// public 아래 images 폴더
const IMG_PATH = 'C://uploadfile/';
// const IMG_PATH = '/images/';

function BoardDetail() {

  const token = useSelector((state) => state.member.token);

  const navigate = new useNavigate();

  const params = useParams();

  const [board, setBoard] = useState(null);

  // 컨텍스트에서 host 데이터 가져오기
  const { host } = useContext(Context);

    // 1. useEffect를 사용하면 처음에 화면이 렌더링되고
    // 2. useEffect 안에 있는 apicall이 실행되고
    // 3. setState로 화면이 다시 렌더링 되면서 board 데이터가 출력됨
    // 처음 렌더링 될때: 화면에 데이터 없음
    // 두번째로 렌더링 될때: 화면에 데이터 있음

    useEffect(()=>{

      // 함수 정의
      const apicall = async () => {

        // const response = await axios.get(`http://localhost:8080/board/read?no=${params.no}`, {
        const response = await axios.get(`${host}/board/read?no=${params.no}`, {
          headers: {
            Authorization: token
          }
        });
        if (response.status === 200) {
          setBoard(response.data);
        } else {
          throw new Error(`api error: ${response.status} ${response.statusText}`);
        }
      
      }
      // 함수 호출
      apicall();
    }, []); //빈배열을 넣어서 처음 렌더링 때만 호출

  return (
        <CustomCard>
            <CustomContainer>
                <h3>게시물 상세</h3>
                {
                  board !==null &&
                  <>
                    <Form.Group controlId="board.title">
                      <Form.Label>제목</Form.Label>
                      <Form.Control type="text" value={board.title} disabled readOnly></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="board.content">
                      <Form.Label>내용</Form.Label>
                      <Form.Control as="textarea" rows={3} value={board.content} disabled readOnly/>
                    </Form.Group>
                    <Form.Group controlId="board.content">
                      <Form.Label>작성자</Form.Label>
                      <Form.Control type="text" value={board.writer} disabled readOnly></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="board.content">
                      <Form.Label>등록일</Form.Label>
                      <Form.Control type="text" value={board.regDate} disabled readOnly></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="board.content">
                      <Form.Label>수정일</Form.Label>
                      <Form.Control type="text" value={board.modDate} disabled readOnly></Form.Control>
                    </Form.Group>
                    {/* 이미지 */}
                    {/* <img src={`${IMG_PATH}${board.imgPath}`}></img> */}
                    <img src={board.imgPath}></img>
                    
                    <Button variant="primary" onClick={()=>{
                        navigate(`/board/modify/${params.no}`);
                    }}>게시물 수정</Button>
                  </>
                }
            </CustomContainer>
        </CustomCard>
    );
  };

export default BoardDetail;