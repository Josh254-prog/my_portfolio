
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import SocialLinks from '../components/SocialLinks'; // Assuming you want to keep this

// **IMPORTANT: Replace these placeholders with your actual IDs from the Email.js dashboard**
const SERVICE_ID = 'service_kcfp3no';
const TEMPLATE_ID = 'template_c2hwr0v'; // <-- Correct template ID
const PUBLIC_KEY = '-XIxOzWxqVq1ykbom'; 

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          alert('Message sent successfully! 🚀'); // Show success message
          form.current.reset(); // Clear the form fields
        },
        (error) => {
          console.error('FAILED...', error.text);
          alert('An error occurred. Please try again. 😔'); // Show error message
        },
      );
  };

  return (
    <section id="contact" className="py-20 px-8 md:px-16 bg-primaryDark text-textLight">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-accentPurple to-accentPink"
        >
          Get in Touch
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="bg-secondaryDark p-8 rounded-lg shadow-xl border border-gray-700"
        >
          <p className="text-lg text-center mb-8">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>

          <div className="mb-8 text-center">
            <p className="text-2xl font-semibold mb-2">Email:</p>
            <a href="mailto:joshuaokoth956@gmail.com" className="text-accentPink hover:underline text-xl">
              joshuaokoth956@gmail.com
            </a>
          </div>

          <div className="mb-8 text-center">
            <p className="text-2xl font-semibold mb-4">Connect with me:</p>
            <SocialLinks />
          </div>

          <h3 className="text-2xl font-semibold text-center mb-6 text-white">Send me a message:</h3>
          
          {/* THE EMAIL.JS FORM */}
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium mb-2 text-white">Name</label>
              <input 
                type="text" 
                id="name" 
                name="user_name" // <-- Correct name for Email.js template
                className="w-full p-3 rounded-md bg-gray-900 border border-gray-700 focus:border-accentPink focus:ring focus:ring-accentPink focus:ring-opacity-50 outline-none text-textLight" 
                required 
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-2 text-white">Email</label>
              <input 
                type="email" 
                id="email" 
                name="user_email" // <-- Correct name for Email.js template
                className="w-full p-3 rounded-md bg-gray-900 border border-gray-700 focus:border-accentPink focus:ring focus:ring-accentPink focus:ring-opacity-50 outline-none text-textLight" 
                required 
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium mb-2 text-white">Message</label>
              <textarea 
                id="message" 
                name="message" // <-- Correct name for Email.js template
                rows="5" 
                className="w-full p-3 rounded-md bg-gray-900 border border-gray-700 focus:border-accentPink focus:ring focus:ring-accentPink focus:ring-opacity-50 outline-none text-textLight" 
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              value="Send"
              className="w-full py-3 px-6 text-lg font-semibold rounded-full bg-gradient-to-r from-accentPurple to-accentPink text-white shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;