// src/App.jsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar, Home, About, Projects, Services, Contact, Footer } from './sections';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Services />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
