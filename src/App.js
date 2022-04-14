import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About, Contact, Home, Products } from "./Pages";
import { Navbar, Footer } from "./componets";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
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
      <Footer />
      </Suspense>
    </BrowserRouter>  
  );
}

export default App;
