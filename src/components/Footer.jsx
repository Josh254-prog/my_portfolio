// src/components/Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primaryDark text-textLight py-8 border-t border-gray-700 text-center">
      <div className="max-w-7xl mx-auto">
        <p>&copy; {new Date().getFullYear()} Joshua Opele. All Rights Reserved.</p>
        <p>Powered by Moonsoon Industries</p>
      </div>
    </footer>
  );
};

export default Footer;