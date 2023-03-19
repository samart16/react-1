import React from 'react';
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import { Services } from './components/pages/Services';
import { AboutUs } from './components/pages/AboutUs';
import { JoinUs } from './components/pages/JoinUs';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/about-us' element={<AboutUs/>}/>
          <Route path='/join-us' element={<JoinUs/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
