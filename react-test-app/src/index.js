import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
//
import { Provider } from 'react-redux';
import store from './store/store';
import { loginSuccess } from './store/memberSlice';


// 로그인 정보 유지하기
// 브라우저를 다시 열었을 때 로컬 스토리지에 인증정보가 있는지 확인
// 인증정보가 있으면 로그인 처리
const userStr = localStorage.getItem('user');
if (userStr !== null) {
  const userObj = JSON.parse(userStr);
  store.dispatch(loginSuccess(userObj));
}

// 리액트 라우터를 사용하기 위해 최상위 태그를 <BrowserRouter>로 감싸야함
// 스토어를 사용할 위치에 Provider로 감싸기
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
