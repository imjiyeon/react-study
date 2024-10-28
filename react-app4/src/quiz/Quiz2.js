function Home() {
  return <div>Home</div>;
}

function About() {
  return <div>About</div>;
}

function Contact() {
  return <div>Contact</div>;
}

function Navbar() {
  return (
    <div>
      <Home />
      <About />
      <Contact />
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Navigation</h1>
      <Navbar />
    </div>
  );
}

export default App;
