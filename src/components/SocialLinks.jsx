import React from 'react';

const SocialLinks = ({ className = "flex space-x-6 text-3xl" }) => {
  return (
    <div className={className}>
      <a href="https://linkedin.com/in/joshua-okoth-9b38a8311" target="_blank" rel="noopener noreferrer" className="text-textLight hover:text-accentPink transition duration-300">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https://github.com/Josh254-prog" target="_blank" rel="noopener noreferrer" className="text-textLight hover:text-accentPink transition duration-300">
        <i className="fab fa-github"></i>
      </a>
      {/* Add more social links as needed */}
      {/* Example for Twitter (now X) */}
      {/* <a href="https://twitter.com/your_twitter_profile" target="_blank" rel="noopener noreferrer" className="text-textLight hover:text-accentPink transition duration-300">
        <i className="fab fa-twitter"></i>
      </a> */}
    </div>
  );
};

export default SocialLinks;