import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

// 0.

function Header(props) {

  return <header>
  <h1><a href='/' onClick={event => {
    event.preventDefault();
    props.onChangeMode();
  }}>{props.title}</a>
  </h1>
  </header>
}

function Nav(props) {

  const lis = [];

  for(let t of props.topics){

    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={function(event){
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));
      }}>{t.title}</a>
    </li>)
  }

  return <nav>
  <ol>
    {lis}
  </ol>
  </nav>
}

function Article(props) {
  return <article>
  <h2>{props.title}</h2>
  {props.body}
  </article>
}

function App() {

  let [mode, setMode] = useState('WELCOME');

  let [id, setId] = useState(null);

  let content = null;

  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'},
  ];

  if(mode === "WELCOME"){
    content = <Article title="Welcome" body="Hello, Web"></Article>
  } else if(mode === "READ") {
    let title, body = null;
    for(let t of topics){
      console.log(t.id, id);
      if(t.id === id ){
        title = t.title;
        body = t.body;
      }
    }
    content = <Article title={title} body={body}></Article>
  }

  return (
    <div className="App">
      <Header title="WEB" onChangeMode={function () {
        setMode('WELCOME');
      }}></Header>

      <Nav topics={topics} onChangeMode={function(_id){
        setMode('READ');
        setId(_id);
      }}></Nav>
      {content}
    </div>
  );
}

export default App;
