import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-10 bg-[#110724] bg-opacity-90 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-purple-400">Shanila Dilnayan</div>
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#about" className="hover:text-purple-400 transition duration-300">About Me</a>
          <a href="#skills" className="hover:text-purple-400 transition duration-300">Skills & Certifications</a>
          <a href="#portfolio" className="hover:text-purple-400 transition duration-300">Portfolio</a>
          <a href="#contact" className="bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-2 rounded-full shadow-lg hover:shadow-purple-500/50 transition duration-300">Contact Me</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;