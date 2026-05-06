import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  //makes the link go straight to section in main
  const { hash } = useLocation();

  useEffect(() => {
    if(hash) {
      const section = document.querySelector(hash);
      section?.scrollIntoView();
    }
  }, [hash]);

  return (
    <div className="app">
      <nav className="navbar">
        <Link to="/" className="nav-logo">MyPortfolio</Link>

        <div className="nav-links">
          <Link to="/#about">About</Link>
          <Link to="/#projects">Projects</Link>
          <Link to="/#contact">Contact</Link>
          <Link to="/blog">Blog</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}
export default App;