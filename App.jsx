import React from 'react';
import Navbar from './components/Navbar';
import Cultural from './pages/Cultural';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Tech from './pages/Tech'
import Clubs from './pages/Clubs'
import Exhibition from './pages/Exhibition'
import Semweb from './pages/Semweb'
import Sports from './pages/Sports';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
     
      <Routes>
        <Route path="/culture" element={<Cultural />} />
        <Route path="/sports" element={<Sports />} />
       <Route path="/Tech" element={<Tech/>}/>
       <Route path="/clubs" element={<Clubs/>}/>
       <Route path="/exhibit" element={<Exhibition/>}/>
       <Route path="/sem" element={<Semweb/>}/>
       <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}