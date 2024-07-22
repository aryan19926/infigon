import React from 'react';
import logo from '../assets/logo.svg';

const TestimonialsSection = () => {
  return (
    <section className="bg-[#0D1849] text-white p-8 text-center overflow-hidden min-h-[600px]">
      <h2 className="text-4xl font-bold mb-20 mt-20">What people are saying about Circle</h2>
      <div className="flex justify-center items-center">
        <div className="flex flex-wrap justify-center w-full">
          <div className="w-full md:w-1/2 lg:w-1/4 bg-[#151925] p-6 m-4 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <img src={logo} alt="Leslie Alexander" className="w-10 h-10 rounded-full mr-4" />
              <div className="text-left">
                <p className="font-bold">Leslie Alexander</p>
                <p className="text-sm text-gray-400">Community</p>
              </div>
            </div>
            <blockquote className="italic mb-4">Circle is being used for my project, and the team has been very helpful. Thanks, are there any new Tools you've tried this week?</blockquote>
            <div className="flex">
              <span className="text-[#FFD964]">★★★★★</span>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 bg-[#151925] p-6 m-4 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <img src={logo} alt="Dianne Russell" className="w-10 h-10 rounded-full mr-4" />
              <div className="text-left">
                <p className="font-bold">Dianne Russell</p>
                <p className="text-sm text-gray-400">Community</p>
              </div>
            </div>
            <blockquote className="italic mb-4">Circle is being used for my project, and the team has been very helpful. Thanks, are there any new Tools you've tried this week?</blockquote>
            <div className="flex ">
              <span className="text-[#FFD964]">★★★★★</span>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 bg-[#151925] p-6 m-4 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <img src={logo} alt="Darrell Steward" className="w-10 h-10 rounded-full mr-4" />
              <div className="text-left">
                <p className="font-bold">Darrell Steward</p>
                <p className="text-sm text-gray-400">Community</p>
              </div>
            </div>
            <blockquote className="italic mb-4">Circle is being used for my project, and the team has been very helpful. Thanks, are there any new Tools you've tried this week?</blockquote>
            <div className="flex ">
              <span className="text-[#FFD964]">★★★★★</span>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 bg-[#151925] p-6 m-4 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <img src={logo} alt="Darrell Steward" className="w-10 h-10 rounded-full mr-4" />
              <div className="text-left">
                <p className="font-bold">Darrell Steward</p>
                <p className="text-sm text-gray-400">Community</p>
              </div>
            </div>
            <blockquote className="italic mb-4">Circle is being used for my project, and the team has been very helpful. Thanks, are there any new Tools you've tried this week?</blockquote>
            <div className="flex ">
              <span className="text-[#FFD964]">★★★★★</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
