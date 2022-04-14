import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About, Contact, Home, Products } from "./Pages";
import { Navbar } from "./componets";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <Routes>
        <Route path="/" element={<Navbar />} >
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="products" element={<Products />} />
        </Route>
      </Routes>
      </div>
    </BrowserRouter>  
  );
}

export default App;
