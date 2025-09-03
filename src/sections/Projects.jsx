import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

// Import your placeholder images for projects
import project1Img from '../assets/images/project1-placeholder.jpg';
import project2Img from '../assets/images/project2-placeholder.jpg';
import project3Img from '../assets/images/project3-placeholder.jpg';
import project4Img from '../assets/images/project4-placeholder.jpg';

const projects = [
  {
    title: "E-commerce Store Frontend",
    description: "A responsive e-commerce platform built with React and Redux, featuring product listings, shopping cart functionality, and user authentication. Emphasizes complex state management and a clean UI.",
    image: project1Img,
    liveLink: "https://ecommerce-store-eta-teal.vercel.app/", 
    githubLink: "https://github.com/Josh254-prog/ecommerce_store.git", 
  },
  {
    title: "Livestock Management System",
    description: "An intuitive data visualization dashboard using React and Chart.js. Features dynamic filtering, real-time data updates, and a responsive layout for various devices. Focuses on data presentation and interactivity.",
    image: project2Img,
    liveLink: "https://livestock-management-two.vercel.app/",
    githubLink: "https://github.com/Josh254-prog/livestock_management.git",
  },
  {
    title: "Personal Portfolio Website",
    description: "This very website! A modern, responsive, and interactive portfolio built with React and Tailwind CSS. Showcases my skills, projects, and passion for UI/UX design. Incorporates Framer Motion for animations.",
    image: project3Img, // Perhaps a screenshot of this project itself!
    liveLink: "https://my-portfolio-dusky-one-25.vercel.app/",
    githubLink: "https://github.com/Josh254-prog/my_portfolio.git",
  },
  {
    title: "School Website",
    description: "A simple real-time chat application using React for the frontend and WebSockets (Socket.IO) for instant messaging. Demonstrates real-time communication and user interface updates.",
    image: project4Img,
    liveLink: "https://education-ruddy-one.vercel.app/",
    githubLink: "https://github.com/Josh254-prog/education.git",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-8 md:px-16 bg-primaryDark text-textLight">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-accentPurple to-accentPink"
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index} // Pass index for animation stagger
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;