import logo from './logo.svg';
import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom";

import Traffic from "./components/traffic"
import Navbar from "./components/navbar";
// write functions for buttons in front end
import Home from "./components/home"
import Attack from "./components/attack"
import Domain from "./components/domain"

function App() {
  
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/attack" element={<Attack />} />
        <Route exact path="/domain" element={<Domain />} />
        <Route exact path="/traffic" element={<Traffic />} />
      </Routes>
    </div>
  );
}

export default App;
