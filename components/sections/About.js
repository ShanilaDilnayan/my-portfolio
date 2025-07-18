import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#1A0C35] relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/profile.jpg"
              alt="About Me"
              className="w-full h-auto object-cover rounded-3xl"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x400/6A0DAD/FFFFFF?text=Image+Error"; }}
            />
            {/* <img
              src=""
              alt="shanila"
              className="absolute bottom-4 left-4 w-24 h-24 rounded-full border-4 border-white shadow-lg"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/100x100/FFC0CB/000000?text=Error"; }}
            /> */}
          </div>
        </div>

        <div className="md:w-1/2 text-left p-4">
          <h2 className="text-4xl font-bold mb-6 text-purple-400">About Me</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Hi! I’m a passionate Full-Stack Software Engineer with experience in developing complete software solutions across all platforms — web, mobile, desktop, and system level applications.
            From beautiful interfaces to robust back-end architecture, I deliver end-to-end solutions tailored to user needs. I’m committed to writing clean code, building scalable systems, and crafting seamless digital experiences.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-3 rounded-full shadow-lg hover:shadow-purple-500/50 transition duration-300 text-lg font-semibold">
            Read More
          </button>
        </div>
      </div>

      <AbstractShapes />
    </section>
  );
};

const AbstractShapes = () => (
  <>
    <div className="absolute top-1/2 -left-20 w-48 h-48 bg-pink-500 rounded-full opacity-5 blur-3xl"></div>
    <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-purple-500 rounded-full opacity-5 blur-3xl"></div>
  </>
);

export default About;