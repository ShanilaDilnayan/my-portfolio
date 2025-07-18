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
      <a href="https://github.com/ShanilaDilnayan" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-500 transition duration-300">
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.169 6.839 9.488.5.09.682-.217.682-.483 0-.237-.009-.868-.014-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.007.07 1.532 1.03 1.532 1.03.89 1.529 2.336 1.088 2.903.832.091-.645.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.09.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.65 0 0 .84-.27 2.75 1.025.798-.222 1.64-.333 2.48-.337.84.004 1.682.115 2.48.337 1.908-1.295 2.747-1.025 2.747-1.025.546 1.38.202 2.397.099 2.65.64.698 1.028 1.592 1.028 2.682 0 3.842-2.339 4.686-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.577.688.487C21.137 20.165 24 16.416 24 12c0-5.523-4.477-10-10-10z"></path>
        </svg>
      </a>
      <a href="https://www.facebook.com/shanila.dilnayan.3/" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-500 transition duration-300">
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
        </svg>
      </a>
      <a href="https://www.instagram.com/shanila_dilnayan/" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-500 transition duration-300">
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
        </svg>
      </a>
      <a href="https://www.tiktok.com/@shanila_dilnayan" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-500 transition duration-300">
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
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