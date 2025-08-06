
import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landingPage';
import LayOut from './layout';
import ContentPage from './pages/contentPage';
import ContentBySlug from './pages/contentBySlug';


function App() {
  return (
    <Routes>
      
      <Route path="/" element={<LandingPage/>} />

      
      <Route path="/home" element={<LayOut />}>
        <Route index element={<ContentPage/>} />
        <Route path="content" element={<ContentBySlug/>} />
        <Route  />
        
      </Route>
    </Routes>
  );
}

export default App;
