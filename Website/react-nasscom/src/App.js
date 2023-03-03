import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Locations from './components/pages/Locations';
import Predictions from './components/pages/Predictions';
import Heatwave from './components/pages/Heatwave';
import Team from './components/pages/Team' ;

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/locations' element={<Locations/>} />
          <Route path='/predictions/*' element={<Predictions/>} />
          <Route path='/select/*' element={<Heatwave/>} />
          <Route path= '/team' element={<Team/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
