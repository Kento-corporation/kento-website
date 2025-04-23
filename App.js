
import React from 'react';
import KentoLandingPage from './KentoLandingPage';
import KentoLandingPageEN from './KentoLandingPageEN';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav style={{position: 'fixed', top: 0, right: 0, padding: '1rem', backgroundColor: '#fff', zIndex: 10}}>
        <Link to="/">日本語</Link> | <Link to="/en">English</Link>
      </nav>
      <Routes>
        <Route path="/" element={<KentoLandingPage />} />
        <Route path="/en" element={<KentoLandingPageEN />} />
      </Routes>
    </Router>
  );
}

export default App;
