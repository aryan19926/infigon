import React from 'react';
import logo from "../assets/logo.svg"

const testimonials = [
  {
    name: "Bob Brown",
    feedback: "Circle is being used for my project, and the team has been very helpful. thanks, are there any new Tools you've tried this week?",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Bob Brown",
    feedback: "Circle is being used for my project, and the team has been very helpful. thanks, are there any new Tools you've tried this week?",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Bob Brown",
    feedback: "Circle is being used for my project, and the team has been very helpful. thanks, are there any new Tools you've tried this week?",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Bob Brown",
    feedback: "Circle is being used for my project, and the team has been very helpful. thanks, are there any new Tools you've tried this week?",
    image: "https://via.placeholder.com/150"
  },
  
];

const Testimonials = () => {
  return (
    <section className="bg-[#0D1849] text-white py-8 h-[600px]">
      <h2 className="text-4xl font-bold text-center mb-10 mt-[100px]">What people are saying about Circle</h2>
      <div className="overflow-x-auto mt-[100px]">
        <div className="flex space-x-4 px-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#151925] text-white p-6 rounded-lg w-[470px] flex-shrink-0 ">
              <div className='flex'>
              <img src={logo} alt={testimonial.name} className="w-12 h-12 rounded-full mb-4" />
              <h3 className="text-xl font-semibold mb-2 pt-2">{testimonial.name}</h3>
              </div>
              <p className="text-sm text-left">{testimonial.feedback}</p>
              <div className="flex ">
              <span className="text-[#FFD964]">★★★★★</span>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
