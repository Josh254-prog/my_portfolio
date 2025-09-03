import React, { useState, useEffect } from 'react';

const Header = () => {
  const [activeLink, setActiveLink] = useState('hero'); // Default active link

  // Function to handle smooth scrolling to sections
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveLink(id); // Set active link on click
    }
  };

  // Effect to update active link based on scroll position (optional but good UX)
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'contact'];
      let currentActive = 'hero';
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          // GetBoundingClientRect gives position relative to viewport
          const rect = section.getBoundingClientRect();
          // Check if the section's top is within a certain range from the top of the viewport
          // (e.g., 0 to 150px below the top of the viewport)
          if (rect.top <= 150 && rect.bottom > 150) {
            currentActive = sections[i];
            break;
          }
        }
      }
      setActiveLink(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array means this runs once on mount and cleans up on unmount

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primaryDark bg-opacity-90 backdrop-filter backdrop-blur-md py-4 px-8 md:px-16 flex justify-between items-center shadow-lg">
      <div className="text-2xl font-bold text-white tracking-wide">Joshua Opele</div>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8">
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
          className={`text-lg transition duration-300 ease-in-out ${activeLink === 'hero' ? 'text-accentPink' : 'text-textLight hover:text-accentPink'}`}
        >
          Home
        </a>
        <a
          href="#about"
          onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
          className={`text-lg transition duration-300 ease-in-out ${activeLink === 'about' ? 'text-accentPink' : 'text-textLight hover:text-accentPink'}`}
        >
          About
        </a>
        <a
          href="#projects"
          onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
          className={`text-lg transition duration-300 ease-in-out ${activeLink === 'projects' ? 'text-accentPink' : 'text-textLight hover:text-accentPink'}`}
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
          className={`text-lg transition duration-300 ease-in-out ${activeLink === 'contact' ? 'text-accentPink' : 'text-textLight hover:text-accentPink'}`}
        >
          Contact
        </a>
      </nav>
      {/* Mobile menu icon (hamburger) can be added here */}
      {/* For simplicity, mobile menu implementation is omitted, but typically involves a useState for toggle */}
      <div className="md:hidden">
        {/* You'd put a hamburger icon and a mobile menu component here */}
      </div>
    </header>
  );
};

export default Header;