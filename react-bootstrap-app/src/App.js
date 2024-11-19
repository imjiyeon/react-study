import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './features/Home';
import Register from './features/Register';
import Login from './features/Login';
import BoardList from './features/BoardList';
import BoardDetail from './features/BoardDetail';
import BoardRegister from './features/BoardRegister';
import BoardModify from './features/BoardModify';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/register" element={<Register />} ></Route>
          <Route path="/login" element={<Login />} ></Route>
          <Route path="/board/list" element={<BoardList></BoardList>} ></Route>
          <Route path="/board/register" element={<BoardRegister></BoardRegister>} ></Route>
          <Route path="/board/read/:no" element={<BoardDetail></BoardDetail>} ></Route>
          <Route path="/board/modify/:no" element={<BoardModify></BoardModify>} ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
