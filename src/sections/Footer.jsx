// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 text-center">
      <div className="container mx-auto px-4">
        <p>&copy; {currentYear} Jack Mocho. All rights reserved.</p>
        <p className="text-sm mt-1">Built with passion and dedication.</p>
      </div>
    </footer>
  );
};

export default Footer;
