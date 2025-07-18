import React from 'react';

const PortfolioItem = ({ title, image }) => (
  <div className="bg-[#1A0C35] rounded-xl shadow-lg overflow-hidden border border-purple-700 group">
    <img
      src={image}
      alt={title}
      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
      onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x250/6A0DAD/FFFFFF?text=Image+Error"; }}
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <div className="flex justify-between items-center">
        <span className="text-purple-300 text-sm">UI/UX Design</span>
        <a href="#" className="text-purple-400 hover:underline">View Project</a>
      </div>
    </div>
  </div>
);

const Portfolio = () => {
  const projects = [
    { title: "Web design for Digital Marketing", image: "https://placehold.co/400x250/6A0DAD/FFFFFF?text=Project+1" },
    { title: "Web design for Digital Agency", image: "https://placehold.co/400x250/6A0DAD/FFFFFF?text=Project+2" },
    { title: "Web design for Email Marketing", image: "https://placehold.co/400x250/6A0DAD/FFFFFF?text=Project+3" },
  ];

  return (
    <section id="portfolio" className="py-20 bg-[#110724] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">My Portfolio</h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          All of my latest development projects are here. Simply click the project show and visit my live project.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <PortfolioItem key={index} {...project} />
          ))}
        </div>
      </div>
      <AbstractShapes />
    </section>
  );
};

const AbstractShapes = () => (
  <>
    <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-purple-500 rounded-full opacity-5 blur-3xl animate-pulse"></div>
    <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-pink-500 rounded-full opacity-5 blur-3xl animate-pulse delay-1000"></div>
  </>
);

export default Portfolio;