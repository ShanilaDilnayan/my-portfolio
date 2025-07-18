import React from 'react';

const ExperienceCard = ({ title, institution, period, description }) => (
  <div className="bg-[#1A0C35] p-6 rounded-xl shadow-lg border border-purple-700">
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-purple-300 mb-1">{institution}</p>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Experience = () => {
  const academic = [
    {
      title: "B.Sc in Computer Science & Engineering",
      institution: "### University (#### - ####)",
      description: "Description of your studies and achievements."
    },
    {
      title: "Higher Secondary Certificate",
      institution: "### College (#### - ####)",
      description: "Description of your studies and achievements."
    },
    {
      title: "Secondary School Certificate",
      institution: "### School (#### - ####)",
      description: "Description of your studies and achievements."
    }
  ];

  const jobs = [
    {
      title: "Senior Software Developer",
      institution: "### Software Company (#### - ####)",
      description: "Responsibilities and achievements in this role."
    },
    {
      title: "Junior Software Developer",
      institution: "### Software Company (#### - ####)",
      description: "Responsibilities and achievements in this role."
    },
    {
      title: "Frontend Developer",
      institution: "### Software Company (#### - ####)",
      description: "Responsibilities and achievements in this role."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-[#110724]">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-8 text-purple-400 text-center md:text-left">
            Academic Qualification
          </h2>
          <div className="space-y-8">
            {academic.map((item, index) => (
              <ExperienceCard key={index} {...item} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-8 text-purple-400 text-center md:text-left">
            Job Experience
          </h2>
          <div className="space-y-8">
            {jobs.map((item, index) => (
              <ExperienceCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;