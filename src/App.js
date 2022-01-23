import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home.js';
import NavBar from './components/navBar/NavBar.js';
import Trivias from './components/trivias/Trivias.js'
import Results from './components/results/Results.js';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/trivia" element={<Trivias />} />
        <Route exact path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
}

export default App;
