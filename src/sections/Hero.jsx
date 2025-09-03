import React from 'react';
import { motion } from 'framer-motion';
import profilePhoto from '../assets/images/portpic.jpg'; // Your uploaded profile picture

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative flex items-center justify-center min-h-screen bg-primaryDark overflow-hidden py-20 px-8 md:px-16">
      {/* Background abstract elements (as seen in design) - use SVGs or abstract images */}
      <div className="absolute inset-0 z-0 opacity-10 flex items-center justify-center">
        {/* Placeholder for abstract code snippet or blurred shapes */}
        {/* You'd replace this with actual SVG or image assets */}
        <div className="w-96 h-96 bg-accentPurple rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="w-96 h-96 bg-accentPink rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      {/* Add keyframes for animate-blob in your index.css or a dedicated CSS file if preferred */}


      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto w-full gap-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left md:w-1/2"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accentPurple to-accentPink">
            FRONT-END <br /> DEVELOPER
          </h1>
          <p className="text-xl md:text-2xl text-textLight mb-8">
            I am Joshua Opele - a web developer with a passion for creating beautiful and responsive web experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="py-3 px-8 text-lg font-semibold rounded-full bg-gradient-to-r from-accentPurple to-accentPink text-white shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            >
              View My Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="py-3 px-8 text-lg font-semibold rounded-full border-2 border-accentPink text-accentPink hover:bg-accentPink hover:text-white shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accentPurple shadow-2xl">
            <img
              src={profilePhoto}
              alt="Joshua Opele Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;