import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About, Contact, Home, Products } from "./Pages";
import { Navbar } from "./componets";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} >
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
