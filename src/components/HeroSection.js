// HeroSection.jsx
import React from 'react';
import logo from "../assets/logo.svg";
import dash from "../assets/dash.png";

const HeroSection = () => {
  return (
    <>
      <section className="bg-[#051139] text-white p-8 text-center relative">
        <nav className="flex justify-between items-center py-4 px-6">
          <div className="flex items-center">
            <img src={logo} alt="Orinix" className="w-12 h-12" />
            <a href="/" className="text-white text-xl font-bold">Orinix</a>
          </div>
          <div className="flex space-x-6 pl-9">
            <a href="#homepage" className="text-white">Homepage</a>
            <a href="#features" className="text-white">Features</a>
            <a href="#usecases" className="text-white">Use Cases</a>
            <a href="#pricing" className="text-white">Pricing</a>
            <a href="#blog" className="text-white">Blog</a>
          </div>
          <div>
            <button className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-700 transition duration-300">Join The Waitlist</button>
          </div>
        </nav>
        <div className="mt-16">
          <h1 className="text-4xl md:text-5xl font-bold p-2">Integrate AI for a </h1>
          <h1 className="text-4xl md:text-5xl font-bold p-2">Competitive Analysis </h1>
          <h1 className="text-4xl md:text-5xl font-bold p-2">For Your Business
            <span role="img" aria-label="star">⭐</span>
          </h1>
          <p className="mt-4 text-sm">Elevate your advertising game with creatives that consistently</p>
          <p className="text-sm">outperform your competitors, setting your brand apart.</p>
          <div className="mt-8 space-x-4">
            <button className="px-6 py-2 bg-purple-600 rounded hover:bg-purple-700 transition duration-300">Join The Waitlist</button>
            <button className="px-6 py-2 bg-transparent border border-white rounded hover:bg-white hover:text-blue-900 transition duration-300">Know More</button>
          </div>
          <div className="relative">
            <img src={dash} alt="Dashboard" className="mt-8 mx-auto rounded shadow-lg w-[819px] h-[542px] pr-[80px] relative z-10" />
          </div>
        </div>
      </section>
      <div className="relative h-[96px] bg-[#6A65FF] -mt-[60px] z-20"></div>
    </>
  );
};

export default HeroSection;
