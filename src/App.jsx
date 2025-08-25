// src/App.jsx
import React from 'react';
import { Navbar, Home, About, Projects, Services, Contact, Footer } from './sections';

const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="services"><Services /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
