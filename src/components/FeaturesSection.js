import React from 'react';
import thumb from "../assets/soft.png";
import logo from "../assets/logo.svg";

const FeaturesSection = () => {
  return (
    <section className="bg-[#0D1849] text-white p-8 text-center">
      <h2 className="text-4xl md:text-5xl font-bold p-2 mt-[50px]">Why Orinix would be </h2>
      <h2 className="text-4xl md:text-5xl font-bold p-2">your best fit?</h2>
      <p className="mb-8 mt-4 text-[#FFFFFF] text-sm">Watch this 1min video to learn about Orinix.</p>

      <div className="relative mb-12 mt-11">
        <img src={thumb} alt="Video thumbnail" className="mx-auto rounded-lg shadow-lg w-[1296px] h-[680px]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-[#6A65FF] rounded-full p-4">
            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-around h-[517px]">
        <div className="w-1/3 p-4">
          <div className="flex items-center justify-center mb-4">
            <img src={logo} alt="Fully Responsive" className="h-12 w-12"/>
          </div>
          <h3 className="text-xl font-semibold">Fully Responsive</h3>
          <p className="mt-2">With lots of unique blocks,</p>
          <p className="mt-2">you can easily build a page without coding.</p>
        </div>
        <div className="w-1/3 p-4">
          <div className="flex items-center justify-center mb-4">
            <img src={logo} alt="Multiple Layouts" className="h-12 w-12"/>
          </div>
          <h3 className="text-xl font-semibold">Multiple Layouts</h3>
          <p className="mt-2">With lots of unique blocks,</p>
          <p className="mt-2">you can easily build a page without coding.</p>
        </div>
        <div className="w-1/3 p-4">
          <div className="flex items-center justify-center mb-4">
            <img src={logo} alt="Faster Loading" className="h-12 w-12"/>
          </div>
          <h3 className="text-xl font-semibold">Faster Loading</h3>
          <p className="mt-2">With lots of unique blocks,</p>
          <p className="mt-2">you can easily build a page without coding.</p>
        </div>
        <div className="w-1/3 p-4">
          <div className="flex items-center justify-center mb-4">
            <img src={logo} alt="Super Support" className="h-12 w-12"/>
          </div>
          <h3 className="text-xl font-semibold">Super Support</h3>
          <p className="mt-2">With lots of unique blocks,</p>
          <p className="mt-2">you can easily build a page without coding.</p>
        </div>
        <div className="w-1/3 p-4">
          <div className="flex items-center justify-center mb-4">
            <img src={logo} alt="Rich Documentation" className="h-12 w-12"/>
          </div>
          <h3 className="text-xl font-semibold">Rich Documentation</h3>
          <p className="mt-2">With lots of unique blocks,</p>
          <p className="mt-2">you can easily build a page without coding.</p>
        </div>
        <div className="w-1/3 p-4">
          <div className="flex items-center justify-center mb-4">
            <img src={logo} alt="Lifetime Updates" className="h-12 w-12"/>
          </div>
          <h3 className="text-xl font-semibold">Lifetime Updates</h3>
          <p className="mt-2">With lots of unique blocks,</p>
          <p className="mt-2">you can easily build a page without coding.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
