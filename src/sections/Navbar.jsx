// src/components/Navbar.jsx
import React from 'react';

const navItems = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Projects', to: 'projects' },
  { label: 'Services', to: 'services' },
  { label: 'Contact', to: 'contact' },
];

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 z-50 shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
        <div className="text-white font-bold text-xl">J.K.M</div>
        <div className="flex space-x-6">
          {navItems.map((item) => (
            <button
              key={item.to}
              onClick={() => scrollToSection(item.to)}
              className="text-gray-300 hover:text-white px-2 py-1 cursor-pointer transition-all duration-200 bg-transparent border-none outline-none"
              style={{ background: 'none' }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
