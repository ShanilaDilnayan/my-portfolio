import React from 'react';

const ContactInfo = () => (
  <div className="bg-[#110724] p-8 rounded-xl shadow-lg border border-purple-700 space-y-6">
    <div>
      <p className="text-purple-300 text-lg">Phone : ###-###-####</p>
    </div>
    <div>
      <p className="text-purple-300 text-lg">Email : your@email.com</p>
    </div>
    <img
      src="https://placehold.co/400x250/6A0DAD/FFFFFF?text=Handshake"
      alt="Handshake"
      className="w-full h-auto rounded-lg mt-6"
      onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x250/6A0DAD/FFFFFF?text=Image+Error"; }}
    />
  </div>
);

const ContactForm = () => (
  <div className="bg-[#110724] p-8 rounded-xl shadow-lg border border-purple-700">
    <form className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
        />
      </div>
      <input
        type="text"
        placeholder="Subject"
        className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
      />
      <textarea
        placeholder="Your Message"
        rows="6"
        className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white resize-y"
      ></textarea>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-3 rounded-full shadow-lg hover:shadow-purple-500/50 transition duration-300 text-lg font-semibold"
      >
        Send Message
      </button>
    </form>
  </div>
);

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#1A0C35]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6 text-purple-400">Contact With Me</h2>
        <p className="text-center text-gray-300 mb-12 max-w-xl mx-auto">
          Feel free to directly contact with me. My phone or email below or fill up this form given below me.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;