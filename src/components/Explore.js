import React from 'react';
import pica from '../assets/dash.png';

const Explore = () => {
  return (
    <div className='bg-[#051139] flex items-center justify-center py-8'>
      <div className='bg-[#515DEF] text-white w-[90%] max-w-4xl p-8 rounded-lg flex flex-col md:flex-row items-center justify-between shadow-lg'>
        <div className='md:w-1/2'>
          <h2 className='text-3xl font-bold mb-4'>Explore Free Version now!</h2>
          <p className='mb-6'>Search all the open positions on the web. Get your own personalized dashboard for lifetime</p>
          <div>
            <button className='bg-white text-[#6366F1] font-semibold py-2 px-4 rounded mr-4 mb-4 md:mb-0'>Join Waitlist</button>
            <button className='border-2 border-white text-white font-semibold py-2 px-4 rounded'>Contact</button>
          </div>
        </div>
        <div className='md:w-1/2 mt-6 md:mt-0'>
          <img src={pica} alt="Explore Illustration" className='w-full h-auto object-cover'/>
        </div>
      </div>
    </div>
  );
};

export default Explore;
