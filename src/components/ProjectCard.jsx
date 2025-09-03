import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }} // Staggered animation effect
      className="bg-secondaryDark rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out border border-gray-700"
    >
      {/* Placeholder for project image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover object-top" // Use object-top if you want to emphasize top part of image
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
        <p className="text-textLight text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-4">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 px-4 rounded-full bg-gradient-to-r from-accentPurple to-accentPink text-white text-sm font-medium hover:opacity-90 transition duration-300"
          >
            Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 px-4 rounded-full border-2 border-accentPink text-accentPink text-sm font-medium hover:bg-accentPink hover:text-white transition duration-300"
          >
            View Code (GitHub)
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;