import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// <React.StrictMode>은 코드를 검사해주는 부분으로, 문제가 있으면 표시
// 문제가 있으면 브라우저의 콘솔창에 표시

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);

// 페이지 로딩 속도 등 성능을 측정하는 부분
// 브라우저의 콘솔창에 표시
reportWebVitals();

