import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// 외부에 있는 App 컴포넌트 안쓰고 직접 만들기
// import App from './App';
import reportWebVitals from './reportWebVitals';

// 간단한 App 생성하기
// App에서 사용할 컴포넌트 3개 생성하고 App에 추가

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}

function Topics() {
  return (
    <div>
      <h2>Topics</h2>
      Topics...
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Hello React Router DOM</h1>
      <Home></Home>
      <Topics></Topics>
      <Contact></Contact>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

