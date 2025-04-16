// import logo from './logo.jpg';
import './App.css';
import React from "react";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from './pages/home/Home';
import List from './pages/home/list/List';
import Hotel from './pages/home/hotel/Hotel';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
       <Route path="/hotels" element={<List/>}/> 
       <Route path="/hotels/:id" element={<Hotel/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
