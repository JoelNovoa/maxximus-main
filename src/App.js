
import './App.css';
import React from 'react';
import Home from './Screens/Home';
import Events from './Screens/Events';
import OurHistory from './Screens/OurHistory';
import FindRealtor from './Screens/FindRealtor';
import FindHome from './Screens/FindHome';
import NavBar from './Components/Navbar';
import Realtor from './Screens/Realtor';

import { BrowserRouter, Router, Routes, Route} from 'react-router-dom';
import DynamicButton from './Components/Buttons';
function App() {
  return (
  <div className="flex flex-col">
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/our-history" element={<OurHistory />} />
      <Route path="/find-realtor" element={<FindRealtor />} />
      <Route path="/find-home" element={<FindHome />} />
      <Route path="/realtor" element={<Realtor />} />
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
