import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Router: URL 주소에따라 화면을 전환하는 기능

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 앱에 라우터 설정
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);