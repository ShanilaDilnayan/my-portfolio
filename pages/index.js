// import React, { useState, useEffect } from 'react';


// const App = () => {
  
//   const [db, setDb] = useState(null);
//   const [auth, setAuth] = useState(null);
//   const [userId, setUserId] = useState(null);
//   const [isAuthReady, setIsAuthReady] = useState(false);

//   useEffect(() => {
    
//     const initializeFirebase = async () => {
//       try {
      
//         setIsAuthReady(true);

//       } catch (error) {
//         console.error("Error initializing Firebase:", error);
//         setIsAuthReady(true); 
//       }
//     };

//     initializeFirebase();
//   }, []); 


//   return (
//     <div className="min-h-screen bg-[#110724] text-white font-inter">
//       {/* Navbar */}
//       <nav className="fixed w-full z-10 bg-[#110724] bg-opacity-90 shadow-lg">
//         <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//           <div className="text-2xl font-bold text-purple-400">Evelyn</div>
//           <div className="hidden md:flex space-x-8 items-center">
//             <a href="#about" className="hover:text-purple-400 transition duration-300">About Me</a>
//             <a href="#skills" className="hover:text-purple-400 transition duration-300">Skills & Certifications</a>
//             <a href="#portfolio" className="hover:text-purple-400 transition duration-300">Portfolio</a>
//             <a href="#contact" className="bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-2 rounded-full shadow-lg hover:shadow-purple-500/50 transition duration-300">Contact Me</a>
//           </div>
//           {/* Mobile Menu Button - Not implemented for brevity, but would go here */}
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden pt-16">
//         <div className="absolute inset-0 bg-gradient-to-br from-[#110724] to-[#2A0F4F] opacity-70"></div>
//         <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center justify-center md:justify-between">
//           <div className="text-left md:w-1/2 p-8">
//             <p className="text-lg text-purple-300 mb-2">WELCOME TO MY WORLD</p>
//             <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
//               Hi, I'm <span className="text-purple-400">Evelyn</span> <br /> Web Developer & Designer
//             </h1>
//             <p className="text-lg text-gray-300 mb-8">
//               I'm the Front-End Developer for #Company in Bangladesh. <br /> Visit my profile & stay connect with me.
//             </p>
//             <button className="bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-3 rounded-full shadow-lg hover:shadow-purple-500/50 transition duration-300 text-lg font-semibold">
//               Download My CV
//             </button>
//             <div className="flex space-x-4 mt-8">
//               <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-500 transition duration-300">
//                 <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.169 6.839 9.488.5.09.682-.217.682-.483 0-.237-.009-.868-.014-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.007.07 1.532 1.03 1.532 1.03.89 1.529 2.336 1.088 2.903.832.091-.645.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.09.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.65 0 0 .84-.27 2.75 1.025.798-.222 1.64-.333 2.48-.337.84.004 1.682.115 2.48.337 1.908-1.295 2.747-1.025 2.747-1.025.546 1.38.202 2.397.099 2.65.64.698 1.028 1.592 1.028 2.682 0 3.842-2.339 4.686-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.577.688.487C21.137 20.165 24 16.416 24 12c0-5.523-4.477-10-10-10z"></path></svg>
//               </a>
//               <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-500 transition duration-300">
//                 <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
//               </a>
//               <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-500 transition duration-300">
//                 <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.777 1.613 4.938 4.851.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.07 4.85-1.613 4.938-4.851 4.777-4.851 4.938-.148.058-1.613.069-4.849.069-3.204 0-3.584-.012-4.85-.07-3.252-.148-4.777-1.613-4.938-4.851-.058-1.265-.069-1.645-.069-4.849 0-3.204.012-3.584.07-4.85 1.613-4.938 4.851-4.777 4.851-4.938.148-.058 1.613-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.073 4.948.073 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.44-.645 1.44-1.44s-.645-1.44-1.44-1.44z"></path></svg>
//               </a>
//             </div>
//           </div>
//           <div className="md:w-1/2 flex justify-center p-8">
//             <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center overflow-hidden shadow-2xl">
//               <img
//                 src="" // Placeholder image
//                 alt="Evelyn"
//                 className="w-full h-full object-cover rounded-full transform scale-105"
//                 onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/300x300/6A0DAD/FFFFFF?text=Image+Error"; }}
//               />
//             </div>
//           </div>
//         </div>
//         {/* Abstract shapes from the image */}
//         <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-purple-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-pink-500 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-700 rounded-full opacity-5 blur-3xl animate-pulse delay-2000"></div>
//       </section>

//       {/* About Me Section */}
//       <section id="about" className="py-20 bg-[#1A0C35] relative overflow-hidden">
//         <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
//           <div className="md:w-1/2 flex justify-center">
//             <div className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl">
//               <img
//                 src="https://placehold.co/400x400/6A0DAD/FFFFFF?text=About+Me" // Placeholder image
//                 alt="About Me"
//                 className="w-full h-auto object-cover rounded-3xl"
//                 onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x400/6A0DAD/FFFFFF?text=Image+Error"; }}
//               />
//               {/* Small dog image overlay */}
//               <img
//                 src="https://placehold.co/100x100/FFC0CB/000000?text=Dog" // Placeholder for dog image
//                 alt="Dog"
//                 className="absolute bottom-4 left-4 w-24 h-24 rounded-full border-4 border-white shadow-lg"
//                 onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/100x100/FFC0CB/000000?text=Error"; }}
//               />
//             </div>
//           </div>
//           <div className="md:w-1/2 text-left p-4">
//             <h2 className="text-4xl font-bold mb-6 text-purple-400">About Me</h2>
//             <p className="text-gray-300 text-lg leading-relaxed mb-6">
//               Hi I am an enthusiastic front-end developer & UI/UX Designer. I can design & build your website as you want.
//               I have good knowledge of front-end development as well as UI/UX designing. Now I am able to design your website
//               or application.
//             </p>
//             <button className="bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-3 rounded-full shadow-lg hover:shadow-purple-500/50 transition duration-300 text-lg font-semibold">
//               Read More
//             </button>
//           </div>
//         </div>
//         {/* Abstract shapes */}
//         <div className="absolute top-1/2 -left-20 w-48 h-48 bg-pink-500 rounded-full opacity-5 blur-3xl"></div>
//         <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-purple-500 rounded-full opacity-5 blur-3xl"></div>
//       </section>

//       {/* Academic Qualification & Job Experience */}
//       <section id="experience" className="py-20 bg-[#110724]">
//         <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
//           {/* Academic Qualification */}
//           <div>
//             <h2 className="text-3xl font-bold mb-8 text-purple-400 text-center md:text-left">Academic Qualification</h2>
//             <div className="space-y-8">
//               <div className="bg-[#1A0C35] p-6 rounded-xl shadow-lg border border-purple-700">
//                 <h3 className="text-xl font-semibold text-white mb-2">B.Sc in Computer Science & Engineering</h3>
//                 <p className="text-purple-300 mb-1">### University (#### - ####)</p>
//                 <p className="text-gray-400">Description of your studies and achievements.</p>
//               </div>
//               <div className="bg-[#1A0C35] p-6 rounded-xl shadow-lg border border-purple-700">
//                 <h3 className="text-xl font-semibold text-white mb-2">Higher Secondary Certificate</h3>
//                 <p className="text-purple-300 mb-1">### College (#### - ####)</p>
//                 <p className="text-gray-400">Description of your studies and achievements.</p>
//               </div>
//               <div className="bg-[#1A0C35] p-6 rounded-xl shadow-lg border border-purple-700">
//                 <h3 className="text-xl font-semibold text-white mb-2">Secondary School Certificate</h3>
//                 <p className="text-purple-300 mb-1">### School (#### - ####)</p>
//                 <p className="text-gray-400">Description of your studies and achievements.</p>
//               </div>
//             </div>
//           </div>

//           {/* Job Experience */}
//           <div>
//             <h2 className="text-3xl font-bold mb-8 text-purple-400 text-center md:text-left">Job Experience</h2>
//             <div className="space-y-8">
//               <div className="bg-[#1A0C35] p-6 rounded-xl shadow-lg border border-purple-700">
//                 <h3 className="text-xl font-semibold text-white mb-2">Senior Software Developer</h3>
//                 <p className="text-purple-300 mb-1">### Software Company (#### - ####)</p>
//                 <p className="text-gray-400">Responsibilities and achievements in this role.</p>
//               </div>
//               <div className="bg-[#1A0C35] p-6 rounded-xl shadow-lg border border-purple-700">
//                 <h3 className="text-xl font-semibold text-white mb-2">Junior Software Developer</h3>
//                 <p className="text-purple-300 mb-1">### Software Company (#### - ####)</p>
//                 <p className="text-gray-400">Responsibilities and achievements in this role.</p>
//               </div>
//               <div className="bg-[#1A0C35] p-6 rounded-xl shadow-lg border border-purple-700">
//                 <h3 className="text-xl font-semibold text-white mb-2">Frontend Developer</h3>
//                 <p className="text-purple-300 mb-1">### Software Company (#### - ####)</p>
//                 <p className="text-gray-400">Responsibilities and achievements in this role.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Skills & Certifications Section */}
//       <section id="skills" className="py-20 bg-[#1A0C35]">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">Skills & Certifications</h2>

//           {/* Skills */}
//           <div className="mb-16">
//             <h3 className="text-3xl font-semibold text-center mb-8 text-white">My Skills</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {/* Skill Item */}
//               {[
//                 { name: "Web Design", percentage: "90%" },
//                 { name: "Development", percentage: "85%" },
//                 { name: "Project Management", percentage: "80%" },
//                 { name: "Need It", percentage: "75%" },
//                 { name: "Communication (English)", percentage: "95%" },
//               ].map((skill, index) => (
//                 <div key={index} className="bg-[#110724] p-6 rounded-xl shadow-lg border border-purple-700">
//                   <div className="flex justify-between items-center mb-2">
//                     <span className="text-lg font-medium text-white">{skill.name}</span>
//                     <span className="text-lg font-medium text-purple-300">{skill.percentage}</span>
//                   </div>
//                   <div className="w-full bg-gray-700 rounded-full h-2.5">
//                     <div
//                       className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full"
//                       style={{ width: skill.percentage }}
//                     ></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Certifications */}
//           <div>
//             <h3 className="text-3xl font-semibold text-center mb-8 text-white">Certifications</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {/* Certification Item */}
//               {[
//                 { title: "CALARTS", image: "https://placehold.co/150x100/6A0DAD/FFFFFF?text=Cert1" },
//                 { title: "Google", image: "https://placehold.co/150x100/6A0DAD/FFFFFF?text=Cert2" },
//                 { title: "IBM", image: "https://placehold.co/150x100/6A0DAD/FFFFFF?text=Cert3" },
//                 { title: "Microsoft", image: "https://placehold.co/150x100/6A0DAD/FFFFFF?text=Cert4" },
//                 { title: "Meta", image: "https://placehold.co/150x100/6A0DAD/FFFFFF?text=Cert5" },
//                 { title: "Amazon", image: "https://placehold.co/150x100/6A0DAD/FFFFFF?text=Cert6" },
//               ].map((cert, index) => (
//                 <div key={index} className="bg-[#110724] p-6 rounded-xl shadow-lg border border-purple-700 flex flex-col items-center text-center">
//                   <img
//                     src={cert.image}
//                     alt={cert.title}
//                     className="w-32 h-auto mb-4 rounded-lg object-contain"
//                     onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150x100/6A0DAD/FFFFFF?text=Error"; }}
//                   />
//                   <p className="text-lg font-semibold text-white">{cert.title}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Portfolio Section */}
//       <section id="portfolio" className="py-20 bg-[#110724] relative overflow-hidden">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">My Portfolio</h2>
//           <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
//             All of my latest development projects are here. Simply click the project show and visit my live project.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {/* Portfolio Item */}
//             {[
//               { title: "Web design for Digital Marketing", image: "https://placehold.co/400x250/6A0DAD/FFFFFF?text=Project+1" },
//               { title: "Web design for Digital Agency", image: "https://placehold.co/400x250/6A0DAD/FFFFFF?text=Project+2" },
//               { title: "Web design for Email Marketing", image: "https://placehold.co/400x250/6A0DAD/FFFFFF?text=Project+3" },
//             ].map((project, index) => (
//               <div key={index} className="bg-[#1A0C35] rounded-xl shadow-lg overflow-hidden border border-purple-700 group">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
//                   onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x250/6A0DAD/FFFFFF?text=Image+Error"; }}
//                 />
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
//                   <div className="flex justify-between items-center">
//                     <span className="text-purple-300 text-sm">UI/UX Design</span>
//                     <a href="#" className="text-purple-400 hover:underline">View Project</a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         {/* Abstract shapes */}
//         <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-purple-500 rounded-full opacity-5 blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-pink-500 rounded-full opacity-5 blur-3xl animate-pulse delay-1000"></div>
//       </section>

//       {/* Contact Me Section */}
//       <section id="contact" className="py-20 bg-[#1A0C35]">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold text-center mb-6 text-purple-400">Contact With Me</h2>
//           <p className="text-center text-gray-300 mb-12 max-w-xl mx-auto">
//             Feel free to directly contact with me. My phone or email below or fill up this form given below me.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             {/* Contact Info */}
//             <div className="bg-[#110724] p-8 rounded-xl shadow-lg border border-purple-700 space-y-6">
//               <div>
//                 <p className="text-purple-300 text-lg">Phone : ###-###-####</p>
//               </div>
//               <div>
//                 <p className="text-purple-300 text-lg">Email : your@email.com</p>
//               </div>
//               {/* Placeholder for the handshake image */}
//               <img
//                 src="https://placehold.co/400x250/6A0DAD/FFFFFF?text=Handshake" // Placeholder image
//                 alt="Handshake"
//                 className="w-full h-auto rounded-lg mt-6"
//                 onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x250/6A0DAD/FFFFFF?text=Image+Error"; }}
//               />
//             </div>

//             {/* Contact Form */}
//             <div className="bg-[#110724] p-8 rounded-xl shadow-lg border border-purple-700">
//               <form className="space-y-6">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                   <input
//                     type="text"
//                     placeholder="Your Name"
//                     className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
//                   />
//                   <input
//                     type="email"
//                     placeholder="Email Address"
//                     className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
//                   />
//                 </div>
//                 <input
//                   type="text"
//                   placeholder="Subject"
//                   className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
//                 />
//                 <textarea
//                   placeholder="Your Message"
//                   rows="6"
//                   className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white resize-y"
//                 ></textarea>
//                 <button
//                   type="submit"
//                   className="w-full bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-3 rounded-full shadow-lg hover:shadow-purple-500/50 transition duration-300 text-lg font-semibold"
//                 >
//                   Send Message
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-[#110724] py-10">
//         <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
//           <div className="mb-4 md:mb-0">
//             <h3 className="text-xl font-bold text-purple-400 mb-2">Quick Links</h3>
//             <ul className="space-y-1">
//               <li><a href="#about" className="text-gray-300 hover:text-purple-400 transition duration-300">About Me</a></li>
//               <li><a href="#skills" className="text-gray-300 hover:text-purple-400 transition duration-300">Skills & Certifications</a></li>
//               <li><a href="#portfolio" className="text-gray-300 hover:text-purple-400 transition duration-300">Portfolio</a></li>
//             </ul>
//           </div>
//           <div className="mb-4 md:mb-0">
//             <h3 className="text-xl font-bold text-purple-400 mb-2">Follow Me On</h3>
//             <div className="flex justify-center md:justify-start space-x-4">
//               <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-500 transition duration-300">
//                 <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.169 6.839 9.488.5.09.682-.217.682-.483 0-.237-.009-.868-.014-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.007.07 1.532 1.03 1.532 1.03.89 1.529 2.336 1.088 2.903.832.091-.645.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.09.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.65 0 0 .84-.27 2.75 1.025.798-.222 1.64-.333 2.48-.337.84.004 1.682.115 2.48.337 1.908-1.295 2.747-1.025 2.747-1.025.546 1.38.202 2.397.099 2.65.64.698 1.028 1.592 1.028 2.682 0 3.842-2.339 4.686-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.577.688.487C21.137 20.165 24 16.416 24 12c0-5.523-4.477-10-10-10z"></path></svg>
//               </a>
//               <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-500 transition duration-300">
//                 <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
//               </a>
//               <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-500 transition duration-300">
//                 <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.777 1.613 4.938 4.851.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.07 4.85-1.613 4.938-4.777 4.851-4.938.148-.058-1.613-.069-4.849-.069-3.204 0-3.584-.012-4.85-.07-3.252-.148-4.777-1.613-4.938-4.851-.058-1.265-.069-1.645-.069-4.849 0-3.204.012-3.584.07-4.85 1.613-4.938 4.851-4.777 4.851-4.938.148-.058 1.613-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.073 4.948.073 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.44-.645 1.44-1.44s-.645-1.44-1.44-1.44z"></path></svg>
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default App;


import React, { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Skills from '../components/sections/Skills';
import Portfolio from '../components/sections/Portfolio';
import Contact from '../components/sections/Contact';
import Footer from '../components/layout/Footer';

const App = () => {
  const [isAuthReady, setIsAuthReady] = useState(false);
  const [db, setDb] = useState(null);
  const [auth, setAuth] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const initializeFirebase = async () => {
      try {
        setIsAuthReady(true);
      } catch (error) {
        console.error("Error initializing Firebase:", error);
        setIsAuthReady(true);
      }
    };

    initializeFirebase();
  }, []);

  return (
    <div className="min-h-screen bg-[#110724] text-white font-inter">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;