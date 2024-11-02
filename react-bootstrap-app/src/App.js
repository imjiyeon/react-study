import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './features/Home';
// import NavBarElement from './components/NavBar/NavBarElement';
import Layout from './components/Layout';
import BoardList from './features/BoardList';
import BoardRegister from './features/BoardRegister';
import Register from './features/Register';
import BoardModify from './features/BoardModify';
import BoardDetail from './features/BoardDetail';
import Login from './features/Login';

// npm install react-router-dom

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/board/list' element={<BoardList></BoardList>}></Route>
          <Route path='/board/register' element={<BoardRegister></BoardRegister>}></Route>
          <Route path='/board/read/:no' element={<BoardDetail></BoardDetail>}></Route>
          <Route path='/board/modify/:no' element={<BoardModify></BoardModify>}></Route>
        </Route>
      </Routes >
    </>
  );
}

export default App;