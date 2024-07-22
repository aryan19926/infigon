import React from 'react';
import analysis from "../assets/analysis.png"

const Analysis = () => {
  return (
    <div className="flex flex-col md:flex-row items-center min-h-screen bg-[#051139] relative p-4 md:p-0 gap-[100px]">
      <div className="bg-white p-2 rounded-lg shadow-lg relative md:ml-40 mb-8 md:mb-0 ">
        <img src={analysis} alt="Activity" className="w-[259px] h-[431px] mb-4 rounded-lg" />
        <div className="absolute bottom-[-50px] right-[-50px] md:right-[-130px] bg-white p-4 rounded-lg cursor-pointer w-[250px] h-[120px] text-center shadow-lg">
          <p className='font-bold'>Food Utilization</p>
          <p className='text-xs'>24 data available</p>
          <button className="mt-4 bg-[#236BFE] rounded w-[130px] h-[35px]">Analysis now</button>
        </div>
      </div>
      <div className="md:ml-20 text-white md:mr-11">
        <h1 className="text-2xl md:text-4xl font-bold mb-2">Help You Find The Best</h1>
        <h1 className="text-2xl md:text-4xl font-bold mb-6">Analysis For Your Business</h1>
        <ul>
          <li className="flex items-center mb-7 mt-11">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white mr-4">
              <i className="fas fa-check"></i>
            </div>
            <div>
              <h3 className="font-bold mb-2">Trusted and Accurate</h3>
              <p className='w-full md:w-[400px] text-[#FFFFFF] text-sm'>Amet minim mollit non deserunt ullamco est sit dolor do amet sint.Velit officia consequat duis</p>
            </div>
          </li>
          <li className="flex items-center mb-7">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white mr-4">
              <i className="fas fa-building"></i>
            </div>
            <div>
              <h3 className="font-bold mb-2">Hired By Top Company</h3>
              <p className='w-full md:w-[400px] text-[#FFFFFF] text-sm'>Amet minim mollit non deserunt ullamco est sit dolor do amet sint.Velit officia consequat duis</p>
            </div>
          </li>
          <li className="flex items-center mb-7">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white mr-4">
              <i className="fas fa-tags"></i>
            </div>
            <div>
              <h3 className="font-bold mb-2">Various Categories</h3>
              <p className='w-full md:w-[400px] text-[#FFFFFF] text-sm'>Amet minim mollit non deserunt ullamco est sit dolor do amet sint.Velit officia consequat duis</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Analysis;
