import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-[#110724] to-[#2A0F4F] opacity-70"></div>
      <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center justify-center md:justify-between pt-32 lg:pt-0">
        <div className="text-left md:w-2/3 p-10">
          <p className="text-lg text-purple-300 mb-2">WELCOME TO MY WORLD</p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            Hi, I'm <span className="text-purple-400">Shanila</span> <br /> Full-Stack Developer & Designer
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            I create complete software solutions – from modern websites and mobile apps to full system development. <br /> Let’s bring your ideas to life with clean code and creative design.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-3 rounded-full shadow-lg hover:shadow-purple-500/50 transition duration-300 text-lg font-semibold">
            Download My CV
          </button>
          <div className="flex space-x-4 mt-8">
            <SocialLinks />
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center p-8">
          <div className='hidden md:block'>
            <div className="relative w-64 h-64 md:w-110 md:h-110 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center overflow-hidden shadow-2xl">
              <img
                src="/shanila.jpg"
                alt="Shanila"
                className="w-full h-full object-cover rounded-full transform scale-105"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/300x300/6A0DAD/FFFFFF?text=Image+Error"; }}
              />
            </div>
          </div>
        </div>
      </div>
      <AbstractShapes />
    </section>
  );
};

const SocialLinks = () => {
  return (
    <>
      <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-500 transition duration-300">
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.169 6.839 9.488.5.09.682-.217.682-.483 0-.237-.009-.868-.014-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.007.07 1.532 1.03 1.532 1.03.89 1.529 2.336 1.088 2.903.832.091-.645.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.09.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.65 0 0 .84-.27 2.75 1.025.798-.222 1.64-.333 2.48-.337.84.004 1.682.115 2.48.337 1.908-1.295 2.747-1.025 2.747-1.025.546 1.38.202 2.397.099 2.65.64.698 1.028 1.592 1.028 2.682 0 3.842-2.339 4.686-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.577.688.487C21.137 20.165 24 16.416 24 12c0-5.523-4.477-10-10-10z"></path>
        </svg>
      </a>
      <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-500 transition duration-300">
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.169 6.839 9.488.5.09.682-.217.682-.483 0-.237-.009-.868-.014-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.007.07 1.532 1.03 1.532 1.03.89 1.529 2.336 1.088 2.903.832.091-.645.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.09.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.65 0 0 .84-.27 2.75 1.025.798-.222 1.64-.333 2.48-.337.84.004 1.682.115 2.48.337 1.908-1.295 2.747-1.025 2.747-1.025.546 1.38.202 2.397.099 2.65.64.698 1.028 1.592 1.028 2.682 0 3.842-2.339 4.686-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.577.688.487C21.137 20.165 24 16.416 24 12c0-5.523-4.477-10-10-10z"></path>
        </svg>
      </a>
      <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-500 transition duration-300">
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.169 6.839 9.488.5.09.682-.217.682-.483 0-.237-.009-.868-.014-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.007.07 1.532 1.03 1.532 1.03.89 1.529 2.336 1.088 2.903.832.091-.645.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.09.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.65 0 0 .84-.27 2.75 1.025.798-.222 1.64-.333 2.48-.337.84.004 1.682.115 2.48.337 1.908-1.295 2.747-1.025 2.747-1.025.546 1.38.202 2.397.099 2.65.64.698 1.028 1.592 1.028 2.682 0 3.842-2.339 4.686-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.577.688.487C21.137 20.165 24 16.416 24 12c0-5.523-4.477-10-10-10z"></path>
        </svg>
      </a>
      {/* Add other social links similarly */}
    </>
  );
};

const AbstractShapes = () => {
  return (
    <>
      <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-purple-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-pink-500 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-700 rounded-full opacity-5 blur-3xl animate-pulse delay-2000"></div>
    </>
  );
};

export default Hero;