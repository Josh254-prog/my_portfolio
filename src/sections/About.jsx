import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'HTML5', 'CSS3', 'JavaScript (ES6+)', 'React',
  'UI/UX Design (Wireframing, Prototyping, User Research)',
  'Responsive Design', 'Git & GitHub', 'Problem-Solving',
  'Continuous Learning', 'Teamwork'
];

const About = () => {
  return (
    <section id="about" className="py-20 px-8 md:px-16 bg-primaryDark text-textLight">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-accentPurple to-accentPink"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="md:w-1/2 text-lg leading-relaxed space-y-4"
          >
            <p>
              Hello! I'm Joshua Opele, a passionate Front-End Developer with a keen eye for UI/UX. My journey into web development began with a fascination for how interactive and visually appealing experiences are crafted on the internet. I thrive on bringing designs to life and creating intuitive, user-friendly interfaces.
            </p>
            <p>
              I believe in the power of clean, efficient code and am constantly exploring new technologies and best practices to enhance my skills. From conceptualization to deployment, I enjoy every step of building engaging web applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">My Key Skills:</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <li
                  key={index}
                  className="bg-secondaryDark text-textLight py-2 px-4 rounded-lg text-center shadow-md border border-gray-700 hover:border-accentPink transition duration-300 ease-in-out"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;