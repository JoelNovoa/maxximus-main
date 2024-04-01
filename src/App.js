
import './App.css';
import React from 'react';
import Home from './Views/Home';
import Events from './Views/Events';
import OurHistory from './Views/OurHistory';
import FindRealtor from './Views/FindRealtor';
import FindHome from './Views/FindHome';
import NavBar from './Components/Common/Navbar';
import Realtor from './Views/Realtor';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
  <div className="flex flex-col">
    <Router>
      <div className="flex flex-col">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/our-history" element={<OurHistory />} />
          <Route path="/find-realtor" element={<FindRealtor />} />
          <Route path="/find-home" element={<FindHome />} />
          <Route path="/realtor" element={<Realtor />} />
        </Routes>
      </div>
    </Router>
  </div>
  );
}

export default App;
