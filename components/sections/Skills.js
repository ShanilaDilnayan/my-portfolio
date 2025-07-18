import React from 'react';

const SkillBar = ({ name, percentage }) => (
  <div className="bg-[#110724] p-6 rounded-xl shadow-lg border border-purple-700">
    <div className="flex justify-between items-center mb-2">
      <span className="text-lg font-medium text-white">{name}</span>
      <span className="text-lg font-medium text-purple-300">{percentage}</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2.5">
      <div
        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full"
        style={{ width: percentage }}
      ></div>
    </div>
  </div>
);

const CertificationCard = ({ title, image }) => (
  <div className="bg-[#110724] p-6 rounded-xl shadow-lg border border-purple-700 flex flex-col items-center text-center">
    <img
      src={image}
      alt={title}
      className="w-32 h-auto mb-4 rounded-lg object-contain"
      onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150x100/6A0DAD/FFFFFF?text=Error"; }}
    />
    <p className="text-lg font-semibold text-white">{title}</p>
  </div>
);

const Skills = () => {
  const skills = [
    { name: "Web Design", percentage: "90%" },
    { name: "Development", percentage: "85%" },
    { name: "Project Management", percentage: "80%" },
    { name: "Need It", percentage: "75%" },
    { name: "Communication (English)", percentage: "95%" },
  ];

  const certifications = [
    { title: "CALARTS", image: "https://placehold.co/150x100/6A0DAD/FFFFFF?text=Cert1" },
    { title: "Google", image: "https://placehold.co/150x100/6A0DAD/FFFFFF?text=Cert2" },
    { title: "IBM", image: "https://placehold.co/150x100/6A0DAD/FFFFFF?text=Cert3" },
    { title: "Microsoft", image: "https://placehold.co/150x100/6A0DAD/FFFFFF?text=Cert4" },
    { title: "Meta", image: "https://placehold.co/150x100/6A0DAD/FFFFFF?text=Cert5" },
    { title: "Amazon", image: "https://placehold.co/150x100/6A0DAD/FFFFFF?text=Cert6" },
  ];

  return (
    <section id="skills" className="py-20 bg-[#1A0C35]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">Skills & Certifications</h2>

        {/* Skills */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-center mb-8 text-white">My Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <SkillBar key={index} {...skill} />
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-3xl font-semibold text-center mb-8 text-white">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} {...cert} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;