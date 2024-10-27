import axios from "axios";

const API_URL = 'http://localhost:8080';

const key = 'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3Mjk5MzExMTEsImV4cCI6MTczMjUyMzExMSwic3ViIjoidXNlciJ9.EHky-YCdi307UYFCYUdmRxqPOQEnyNn8D4sYoHqiKD8';

async function fetchBoardDetail(){

    const response = await axios.get(`${API_URL}/board/read?no=2`, {
      headers: {
        Authorization: key,
      }
    });
    if (response.status !== 200) {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    } 
  
    return response.data;
}

export {fetchBoardDetail};