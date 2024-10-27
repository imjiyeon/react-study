import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

// 리액트 라우터를 사용하기 위해 최상위 태그를 <BrowserRouter>로 감싸야함
root.render(
  <BrowserRouter>
    <React.StrictMode>
     <App />
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
