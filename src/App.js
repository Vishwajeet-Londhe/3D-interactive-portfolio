import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Jobs from "./jobs";
import SPPU from "./SPPU";
import "./App.css"; // Importing the CSS file

function App() {
  return (
    <Router>
      <div className="navbar">
        <Link to="/">🏠 Home</Link>
        <Link to="/jobs">💼 Jobs</Link>
        <Link to="/sppu">🎓 SPPU</Link>
      </div>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/sppu" element={<SPPU />} />
        </Routes>
      </div>
      
      <footer>
        <p>&copy; 2025 Vishwajeet Londhe. All Rights Reserved.</p>
      </footer>
    </Router>
  );
}

export default App;
