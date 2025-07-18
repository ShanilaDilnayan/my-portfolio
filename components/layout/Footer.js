import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#110724] py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold text-purple-400 mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="#about" className="text-gray-300 hover:text-purple-400 transition duration-300">About Me</a></li>
            <li><a href="#skills" className="text-gray-300 hover:text-purple-400 transition duration-300">Skills & Certifications</a></li>
            <li><a href="#portfolio" className="text-gray-300 hover:text-purple-400 transition duration-300">Portfolio</a></li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold text-purple-400 mb-2">Follow Me On</h3>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

const SocialLinks = () => {
  return (
    <div className="flex justify-center md:justify-start space-x-4">
      <SocialIcon href="#" icon="github" />
      <SocialIcon href="#" icon="linkedin" />
      <SocialIcon href="#" icon="instagram" />
    </div>
  );
};

const SocialIcon = ({ href, icon }) => {
  const icons = {
    github: <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.169 6.839 9.488.5.09.682-.217.682-.483 0-.237-.009-.868-.014-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.007.07 1.532 1.03 1.532 1.03.89 1.529 2.336 1.088 2.903.832.091-.645.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.09.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.65 0 0 .84-.27 2.75 1.025.798-.222 1.64-.333 2.48-.337.84.004 1.682.115 2.48.337 1.908-1.295 2.747-1.025 2.747-1.025.546 1.38.202 2.397.099 2.65.64.698 1.028 1.592 1.028 2.682 0 3.842-2.339 4.686-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.577.688.487C21.137 20.165 24 16.416 24 12c0-5.523-4.477-10-10-10z" />,
    linkedin: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />,
    instagram: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.777 1.613 4.938 4.851.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.07 4.85-1.613 4.938-4.851 4.777-4.851 4.938-.148.058-1.613.069-4.849.069-3.204 0-3.584-.012-4.85-.07-3.252-.148-4.777-1.613-4.938-4.851-.058-1.265-.069-1.645-.069-4.849 0-3.204.012-3.584.07-4.85 1.613-4.938 4.851-4.777 4.851-4.938.148-.058 1.613-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.073 4.948.073 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.44-.645 1.44-1.44s-.645-1.44-1.44-1.44z" />
  };

  return (
    <a href={href} className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-500 transition duration-300">
      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        {icons[icon]}
      </svg>
    </a>
  );
};

export default Footer;