// src/App.jsx

import React from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer'; // <-- Import the Footer component
import SocialLinks from './components/SocialLinks'; // Import SocialLinks if needed

function App() {
  return (
    <div className="bg-primaryDark text-textLight min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer /> {/* <-- Add the Footer component here */}
    </div>
  );
}

export default App;