// src/components/Navbar.jsx
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const navItems = [
  { label: 'Home', target: 'home' },
  { label: 'About', target: 'about' },
  { label: 'Projects', target: 'projects' },
  { label: 'Services', target: 'services' },
  { label: 'Contact', target: 'contact' },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 z-50 shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
        <div className="text-white font-bold text-xl">J.K.M</div>
        <div className="flex space-x-6">
          {navItems.map((item) => (
            <ScrollLink
              key={item.target}
              to={item.target}
              spy={true}
              smooth={true}
              offset={-70} // Adjust for navbar height
              duration={500}
              activeClass="text-cyan-400 border-b-2 border-cyan-400"
              className="text-gray-300 hover:text-white px-2 py-1 cursor-pointer transition-all duration-200"
            >
              {item.label}
            </ScrollLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
